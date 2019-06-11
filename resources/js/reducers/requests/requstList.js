import {
	LOAD_ALL_REQUESTS,
	ALL_REQUESTS_IS_LOADING,

	REQUEST_IS_LOADING,
	REQUEST_IS_ACCPETED,
} from "../../constants/defaultConstants";

export const fetchSmsList = (state = [], {data, type}) => {
	switch (type) {
		case LOAD_ALL_REQUESTS :
			return {
				...state,
				data: state.data ? [...state.data, ...data] : data,
			};
		default:
			return state;
	}
};

export const allRequestsIsLoading = (state = false, {isLoading, type}) => {
	switch (type) {
		case ALL_REQUESTS_IS_LOADING :
			return {
				...state,
				isLoading
			};
		default:
			return state;
	}
};

export const fetchSmsIsLoading = (state = false, {isLoading, type}) => {
	switch (type) {
		case REQUEST_IS_LOADING :
			return {
				...state,
				isLoading
			};
		default:
			return state;
	}
};

export const fetchSmsIsAccepted = (state = false, {isAccepted, type}) => {
	switch (type) {
		case REQUEST_IS_ACCPETED :
			return {
				...state,
				isAccepted
			};
		default:
			return state;
	}
};
