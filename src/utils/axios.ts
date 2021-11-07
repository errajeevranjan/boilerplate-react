import axios from "axios";

const client = axios.create({
	baseURL: "https://jsonplaceholder.typicode.com/todos",
});
const headersCommonOptions = {
	//'X-Requested-With': 'XMLHttpRequest',
	accept: "application/json",
	"content-type": "application/json",
};
export const request = ({ ...options }) => {
	client.defaults.headers.common = headersCommonOptions;

	const token = "1234gg"; //? TODO: get token from localStorage or cookie */

	client.defaults.headers.common.Authorization = `Bearer ${token}`;

	const onSuccess = (response: {}) => response;
	const onError = (error: {}) => error;

	return client(options).then(onSuccess).catch(onError);
};
