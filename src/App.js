import { useCallback, useEffect, useState } from 'react';
import './App.css';
import { SearchBox } from './SearchBox';
import { Table } from './Table';
import { usdFormatter, getRandomUsers, getFormatedDate } from './utils';

const columns = [
	{ name: 'First', field: 'first' },
	{ name: 'Last', field: 'last' },
	{ name: 'Email', field: 'email' },
	{ name: 'Created', field: 'created', render: getFormatedDate },
	{ name: 'Address', field: 'address' },
	{
		name: 'Balance',
		field: 'balance',
		render: usdFormatter.format,
	},
];

function App() {
	const [users, setUsers] = useState([]);
	const [searchText, setSearchText] = useState('');

	useEffect(() => {
		getRandomUsers().then(setUsers);
	}, []);

	const handleSort = useCallback(field => {
		setUsers(prev =>
			[...prev].sort((a, b) =>
				a[field] > b[field] ? 1 : a[field] < b[field] ? -1 : 0
			)
		);
	}, []);

	const filteredUsers = users.filter(
		user =>
			user.first.toLowerCase().includes(searchText.toLowerCase()) ||
			user.last.toLowerCase().includes(searchText.toLowerCase())
	);

	return (
		<>
			<h1 className="title">Employee Manager</h1>
			<div className="container">
				<SearchBox onSearch={setSearchText} />
			</div>
			<Table
				dataSource={filteredUsers}
				columns={columns}
				indexName="No."
				onSort={handleSort}
			/>
		</>
	);
}

export default App;
