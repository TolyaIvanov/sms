import {combineReducers} from "redux";

import {
	fetchPalindromeList,
	allRequestsIsLoading,
	fetchPalindrome,
	fetchPalindromeIsAccepted,
	fetchPalindromeIsLoading
} from "./requests/requstList";

import {
	changeTextareaHeight,
	changeTextareaValue
} from "./form/textarea";

import {
	changeCheckboxValue
} from "./form/checkbox";

export default combineReducers({
	fetchPalindromeList,
	allRequestsIsLoading,

	fetchPalindrome,
	fetchPalindromeIsAccepted,
	fetchPalindromeIsLoading,

	changeTextareaHeight,
	changeTextareaValue,
	changeCheckboxValue,
});





