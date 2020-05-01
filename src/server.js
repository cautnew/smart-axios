const express = require('express');
const server = express();
const { routes } = require('./module');

function getMethod() {
	routes('https://jsonplaceholder.typicode.com/posts/10', {
		type: 'GET',
		success: (data) => console.log(data),
		failure: (err) => console.log(err),
	});
}

function postMethod() {
	routes('https://jsonplaceholder.typicode.com/posts', {
		type: 'POST',
		success: (data) => console.log(data),
		failure: (err) => console.log(err),
		body: {
			title: 'Title Lorem',
			body: 'Body lorem comes here.',
		},
		options: {
			headers: {
				Authentication: 'Bearer fkskfjhsdfhdskjfhsdjkfhdkjshfsdjhkk',
			},
		},
	});
}

// LOCAL VARIABLES
const PORT = 3000;

server.listen(PORT, () => {
	console.log('Server is running on PORT:', PORT);
	getMethod();
	postMethod();
});
