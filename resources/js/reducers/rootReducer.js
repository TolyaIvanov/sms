import {combineReducers} from "redux";

import {
	fetchSmsList,
	allRequestsIsLoading,
	fetchSmsIsAccepted,
	fetchSmsIsLoading
} from "./requests/requstList";

import {
	changeTextareaHeight,
	changeTextareaValue
} from "./form/textarea";

import {
	changeCheckboxValue
} from "./form/checkbox";

export default combineReducers({
	fetchSmsList,
	allRequestsIsLoading,

	fetchSmsIsAccepted,
	fetchSmsIsLoading,

	changeTextareaHeight,
	changeTextareaValue,
	changeCheckboxValue,
});





