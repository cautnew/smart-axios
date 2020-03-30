const GET = require('./get').axiosGet;

/*
let config = {
    type: String,
    success: Function,
    failure: Function
}
*/

function routes(path, { type, success = null, failure = null }) {
	if (success || failure) {
		if (!success || !failure) {
			console.error('Requires response function!');
			return;
		}
	}

	switch (type) {
		case 'GET':
			GET(path, success, failure);
			break;

		default:
			console.log('No type');
			break;
	}
}

module.exports = {
	routes
};
