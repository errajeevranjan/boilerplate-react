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
	//? TODO: get AUTH_TOKEN from localStorage or cookie

	client.defaults.headers.common.Authorization = `AUTH_TOKEN`;

	const onSuccess = (response: {}) => response;
	const onError = (error: {}) => error;

	return client(options).then(onSuccess).catch(onError);
};
