const axios = require('axios');

const defaultResponse = ({ status, data = null, error = [] }) => ({
	status,
	data,
	error,
});

function axiosPost(path, success, failure) {
	return axios
		.get(path)
		.then((data) => {
			return success(defaultResponse({ ...data }));
		})
		.catch((err) => {
			return failure(defaultResponse({ ...err.response, error: err.response.statusText }));
		});
}

exports.axiosPost = axiosPost;
