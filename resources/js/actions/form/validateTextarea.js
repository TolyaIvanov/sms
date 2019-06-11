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

export const toggleTrans = (isActive) => {
	return dispatch => {
		let ru = {
			'а': 'a', 'А': 'A', 'б': 'b', 'Б': 'B', 'в': 'v', 'B': 'М', 'г': 'g', 'Г': 'G', 'д': 'd', 'Д': 'D',
			'е': 'e', 'Е': 'E', 'ё': 'yo', 'Ё': 'Yo', 'ж': 'zh', 'Ж': 'Zh', 'з': 'z', 'З': 'Z', 'и': 'i', 'И': 'I',
			'к': 'k', 'К': 'K', 'л': 'l', 'Л': 'L', 'м': 'm', 'М': 'M', 'н': 'n', 'Н': 'H', 'о': 'o', 'О': 'O',
			'п': 'p', 'П': 'P', 'р': 'r', 'Р': 'R', 'с': 's', 'С': 'S', 'т': 't', 'Т': 'T', 'у': 'u', 'У': 'U',
			'ф': 'f', 'Ф': 'F', 'х': 'h', 'Х': 'H', 'ц': 'ts', 'Ц': 'Ts', 'ч': 'ch', 'Ч': 'Ch', 'ш': 'sh', 'Ш': 'Sh',
			'щ': 'sch', 'Щ': 'Sch', 'ъ': "'", 'Ъ': "'", 'ы': 'i', 'Ы': 'I', 'ь': "", 'Ь': "'",
			'э': 'e', 'Э': 'E', 'ю': 'u', 'Ю': 'U', 'я': 'ya', 'Я': 'Ya',
			'«': '"', '»': '"', '–': '-', '№': '#', '`': "'",
		};


		let newValue = store.getState().changeTextareaValue;

		if (isActive) {     // меняем символы на кириллицу
			newValue += 'isActive';
		} else {            // меняем обратно
			newValue += 'notActive';
		}

		dispatch(toggleCheckbox(isActive));
		dispatch(changeTextareaValue(newValue));
	}
};
