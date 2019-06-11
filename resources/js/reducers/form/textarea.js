import {
	TEXTAREA_HEIGHT_CHANGES,
	TEXTAREA_VALUE_CHANGES,
} from "../../constants/defaultConstants";

export const changeTextareaHeight = (state = [], {type, value, currentRows}) => {
	switch (type) {
		case TEXTAREA_HEIGHT_CHANGES:
			return {
				...state,
				value,
				currentRows,
			};
		default :
			return state;
	}
};

export const changeTextareaValue = (state = '', {value, number, type}) => {
	switch (type) {
		case TEXTAREA_VALUE_CHANGES :
			return {
				value,
				number
			};
		default:
			return state;
	}
};


