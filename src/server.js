const express = require('express');
const server = express();
const { routes } = require('./module');

routes('https://jsonplaceholder.typicode.com/posts/10', {
	type: 'GET',
	success: data => console.log(data),
	failure: data => console.log(data)
});

// LOCAL VARIABLES
const PORT = 3000;

server.listen(PORT, () => {
	console.log('Server is running on PORT:', PORT);
});
