const axios = require('axios');

const defaultResponse = ({ status, data = null, error = [] }) => ({
	status,
	data,
	error,
});

function axiosGet(path, { success, failure, options }) {
	return axios
		.get(path, { ...options })
		.then((data) => {
			return success(defaultResponse({ ...data }));
		})
		.catch((err) => {
			console.log('ERROR: ', err);
			return failure(defaultResponse({ ...err.response, error: err.response.statusText }));
		});
}

exports.axiosGet = axiosGet;
