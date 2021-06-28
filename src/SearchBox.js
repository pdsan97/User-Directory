import { useEffect, useState } from 'react';

export const SearchBox = ({
	onSearch,
	delay = 300,
	placeholder = 'Filter by name',
}) => {
	const [text, setText] = useState('');

	useEffect(() => {
		const timeoutId = setTimeout(onSearch(text), delay);
		return () => {
			clearTimeout(timeoutId);
		};
	}, [text, delay, onSearch]);

	return (
		<input
			className="form-control my-3"
			placeholder={placeholder}
			value={text}
			onChange={ev => setText(ev.target.value)}
		></input>
	);
};
