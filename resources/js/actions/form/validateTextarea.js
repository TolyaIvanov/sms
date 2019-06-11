import {
	changeTextareaHeight,
	changeTextareaValue,
	toggleCheckbox,
} from "./actionsCreator";
import store from "../../store";

export const handleTextareaHeight = (event, minRows, maxRows) => {
	return (dispatch) => {
		const textareaLineHeight = 24;
		const previousRows = event.target.rows;

		event.target.rows = minRows;

		const currentRows = ~~(event.target.scrollHeight / textareaLineHeight);

		if (currentRows === previousRows) {
			event.target.rows = currentRows;
		}

		if (currentRows >= maxRows) {
			event.target.rows = maxRows;
			event.target.scrollTop = event.target.scrollHeight;
		}

		dispatch(changeTextareaHeight(currentRows));
	}
};

export const handleTextareaValue = (value, isCheckboxActive) => {
	return dispatch => {
		//поиск количества смс сообщений
		if (!isCheckboxActive) {
			if (Math.floor(value.length / 160) >= 1) {
				dispatch(changeTextareaValue(value, Math.floor(value.length / 154) + 1));
			} else {
				dispatch(changeTextareaValue(value, 1));
			}
		} else {
			if (Math.floor(value.length / 70) >= 1) {
				dispatch(changeTextareaValue(value, Math.floor(value.length / 68) + 1));
			} else {
				dispatch(changeTextareaValue(value, 1));
			}
		}
	}
};

export const toggleTrans = (isActive) => {
	return dispatch => {
		const ru = new Array('Щ', 'щ', 'Я', 'я', 'Ю', 'ю', 'Ч', 'ч', 'Ш', 'ш', 'Ж', 'ж', 'Ц', 'ц', 'А', 'а', 'Б', 'б', 'В', 'в', 'Г', 'г', 'Д', 'д', 'Е', 'е', 'Ё', 'ё', 'З', 'з', 'И', 'и', 'Й', 'й', 'К', 'к', 'Л', 'л', 'М', 'м', 'Н', 'н', 'О', 'о', 'П', 'п', 'Р', 'р', 'С', 'с', 'Т', 'т', 'У', 'у', 'Ф', 'ф', 'Х', 'х', 'Ы', 'ы', 'Ь', 'ь', 'Ъ', 'ъ', 'Э', 'э', 'ю', 'Ю', 'я', 'Я', '№', '\n');
		const en = new Array('Sch', 'sch', 'Ya', 'ya', 'U', 'u', 'Ch', 'ch', 'Sh', 'sh', 'Zh', 'zh', 'Ts', 'ts', 'A', 'a', 'B', 'b', 'V', 'v', 'G', 'g', 'D', 'd', 'E', 'e', 'E', 'e', 'Z', 'z', 'I', 'i', 'J', 'j', 'K', 'k', 'L', 'l', 'M', 'm', 'N', 'n', 'O', 'o', 'P', 'p', 'R', 'r', 'S', 's', 'T', 't', 'U', 'u', 'F', 'f', 'H', 'h', 'I', 'i', '`', '`', '\'', '\'', 'E', 'e', 'u', 'U', 'ya', 'Ya', '#', '\n');
		let value = store.getState().changeTextareaValue.value;
		let newValue = isActive ? cyrill_to_latin(value, ru, en) : latin_to_cyrill(value, ru, en);

		//поиск количества смс сообщений
		dispatch(handleTextareaValue(newValue, isActive));
		dispatch(toggleCheckbox(isActive));
	}
};

const cyrill_to_latin = (text, ru, en) => {
	for (let i = 0; i < ru.length; i++) {
		const reg = new RegExp(ru[i], "g");
		text = text.replace(reg, en[i]);
	}

	return text;
};

function latin_to_cyrill(text, ru, en) {
	for (let i = 0; i < en.length; i++) {
		const reg = new RegExp(en[i], "g");
		text = text.replace(reg, ru[i]);
	}

	return text;
}
