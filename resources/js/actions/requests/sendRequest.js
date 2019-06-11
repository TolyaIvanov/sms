import {
	fetchSms,
	fetchSmsIsLoading,
	fetchSmsIsAccepted,

	fetchSmsListSuccess,
	allRequestsIsLoading,
} from "./actionCreator";

import store from '../../store';
import {changeTextareaValue} from "../../reducers/form/textarea";

export const fetchSmsList = (url) => {
	return dispatch => {
		dispatch(allRequestsIsLoading(true));

		fetch(url)
			.then((response => {
				if (!response.ok) {
					throw Error(response.statusText)
				}

				dispatch(allRequestsIsLoading(false));

				return response;
			}))
			.then(response => response.json())
			.then(data => dispatch(fetchSmsListSuccess(data)));
	}
};

export const fetchOneSms = (url) => {
	return dispatch => {
		const input = {
			value: store.getState().changeTextareaValue
		};

		input.value = input.value.trim();
		event.preventDefault();

		if (input.value.length >= 1) {
			dispatch(fetchSmsIsLoading(true));

			fetch(url, {
				method: 'POST',
				body: JSON.stringify(input.value ? input : ''),
				headers: {
					'Content-Type': 'application/json'
				}
			})
				.then(response => {
					if (!response.ok) {
						throw Error(response.statusText)
					}

					dispatch(fetchSmsIsLoading(false));
					dispatch(fetchAccepted());

					return response;
				})
				.then(response => response.json())
				.then(data => dispatch(fetchSms(data)));
		}
	}
};


export const fetchAccepted = () => {
	return dispatch => {
		dispatch(fetchSmsIsAccepted(true));

		setTimeout(() => {
			dispatch(fetchSmsIsAccepted(false));
		}, 3000)
	}
};
