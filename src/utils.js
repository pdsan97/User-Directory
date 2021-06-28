export const getFormatedDate = date => {
	const newDate = new Date(date);
	const month = newDate.toLocaleString('default', { month: 'long' });
	const day = newDate.getDate();
	const year = newDate.getFullYear();
	return `${month} ${day} ${year}`;
};

export const usdFormatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
});

export const getRandomUsers = async () => {
	const response = await fetch('https://randomuser.me/api/?results=22');

	const { results } = await response.json();
	const users = results.map(user => ({
		first: user.name.first,
		last: user.name.last,
		email: user.email,
		created: user.registered.date,
		address: user.location.street.name,
		balance: Math.random() * 10000,
	}));

	return users;
};
