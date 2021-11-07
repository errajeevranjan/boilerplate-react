import axios from "axios";

const client = axios.create({
	baseURL: "https://jsonplaceholder.typicode.com/todos",
	headers: {
		// 'X-Custom-Header': 'foobar',
		accept: "application/json",
		"content-type": "application/json",
	},
	params: {
		// ID: 12345
	},
});

export const request = ({ ...options }) => {
	const token = "1234gg"; //? TODO: get token from localStorage or cookie */

	client.defaults.headers.common.Authorization = `Bearer ${token}`;

	const onSuccess = (response: {}) => response;
	const onError = (error: {}) => error;

	return client(options).then(onSuccess).catch(onError);
};
