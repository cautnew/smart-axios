const GET = require('./get').axiosGet;
const POST = require('./post').axiosPost;

/*
let config = {
    type: String,
    success: Function,
    failure: Function
}
*/

function routes(path, args) {
	switch (args.type) {
		case 'GET':
			GET(path, { ...args });
			break;

		case 'POST':
			POST(path, { ...args });
			break;

		default:
			console.log('No type');
			break;
	}
}

module.exports = {
	routes,
};
