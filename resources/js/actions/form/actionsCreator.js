import {
	TEXTAREA_HEIGHT_CHANGES,
	TEXTAREA_VALUE_CHANGES,
	CHECKBOX_IS_ACTIVE,
} from "../../constants/defaultConstants";

export const changeTextareaHeight = (currentRows) => ({
	type: TEXTAREA_HEIGHT_CHANGES,
	currentRows,
});

export const changeTextareaValue = (value, number) => ({
	type: TEXTAREA_VALUE_CHANGES,
	value,
	number
});

export const toggleCheckbox = (value) => ({
	type: CHECKBOX_IS_ACTIVE,
	value
});

