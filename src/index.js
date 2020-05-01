const GET = require('./methods/get').axiosGet;
const POST = require('./methods/post').axiosPost;

function smartAxios(path, args) {
	switch (args.type) {
		case 'GET':
			GET(path, { ...args });
			break;

		case 'POST':
			POST(path, { ...args });
			break;

		default:
			console.error('You need to set a value for type property.');
			break;
	}
}

module.exports = { smartAxios };
