import { useQuery } from "react-query";
import { request } from "utils/axios";

type ApiTestTypes = {
	onSuccess: (data: any) => void;
	onError: (error: any) => void;
};

const testAxios = () => {
	return request({ method: "get" });
};
export const useApiTest = ({ onSuccess, onError }: ApiTestTypes) => {
	return useQuery("test-axios-working", testAxios, {
		onSuccess,
		onError,
	});
};
