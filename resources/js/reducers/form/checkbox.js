import {
	CHECKBOX_IS_ACTIVE
} from "../../constants/defaultConstants";

export const changeCheckboxValue = (state = '', {value, type}) => {
	switch (type) {
		case CHECKBOX_IS_ACTIVE :
			return value;
		default:
			return state;
	}
};
