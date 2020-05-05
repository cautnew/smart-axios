const axios = require('axios');

const defaultResponse = ({ status, data = null, error = [] }) => ({
	status,
	data,
	error,
});

function axiosPost(path, { action, success, failure, body, options }) {
	if (action) action;

	return axios
		.post(path, { ...body }, { ...options })
		.then((data) => {
			return success ? success(defaultResponse({ ...data })) : data;
		})
		.catch((err) => {
			return failure
				? failure(defaultResponse({ ...err.response, error: err.response.statusText }))
				: err;
		});
}

exports.axiosPost = axiosPost;
