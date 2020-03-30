const axios = require('axios');

function axiosGet(path, success, failure) {
	return axios
		.get(path)
		.then(data => success(data))
		.catch(err => failure(err));
}

exports.axiosGet = axiosGet;
