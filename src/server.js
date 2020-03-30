const express = require('express');
const server = express();

// LOCAL VARIABLES
const PORT = 3000;

server.listen(PORT, () => {
	console.log('Server is running on PORT:', PORT);
});
