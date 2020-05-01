const axios = require('axios');

const defaultResponse = ({ status, data = null, error = [] }) => ({
	status,
	data,
	error,
});

function axiosPost(path, { success, failure, body, options }) {
	return axios
		.post(path, { ...body }, { ...options })
		.then((data) => {
			return success(defaultResponse({ ...data }));
		})
		.catch((err) => {
			return failure(defaultResponse({ ...err.response, error: err.response.statusText }));
			// return console.log(err);
		});
}

exports.axiosPost = axiosPost;
