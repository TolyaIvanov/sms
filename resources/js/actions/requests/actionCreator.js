import {
	LOAD_ALL_REQUESTS,
	ALL_REQUESTS_IS_LOADING,

	REQUEST_IS_LOADING,
	REQUEST_IS_ACCPETED
} from "../../constants/defaultConstants";

// all requests
export const fetchSmsListSuccess = data => ({
	type: LOAD_ALL_REQUESTS,
	data,
});

export const allRequestsIsLoading = isLoading => ({
	type: ALL_REQUESTS_IS_LOADING,
	isLoading
});
										//work with 1 request

export const fetchSmsIsLoading = isLoading => ({
	type: REQUEST_IS_LOADING,
	isLoading
});

export const fetchSmsIsAccepted = isAccepted => ({
	type: REQUEST_IS_ACCPETED,
	isAccepted
});
