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
			return success ? success(defaultResponse({ ...data })) : data;
		})
		.catch((err) => {
			return failure
				? failure(defaultResponse({ ...err.response, error: err.response.statusText }))
				: err;
		});
}

exports.axiosGet = axiosGet;
