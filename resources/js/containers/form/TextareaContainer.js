import React from 'react';
import {connect} from 'react-redux';

import Textarea from './../../components/form/Textarea';

import {
	TEXTAREA_MAX_ROWS,
	TEXTAREA_MIN_ROWS
} from "../../constants/defaultConstants";

import {
	handleTextareaHeight,
	handleTextareaValue,
} from "../../actions/form/validateTextarea";

class TextareaContainer extends React.Component {
	render() {
		let rows;

		if (this.props.data.currentRows && this.props.data.currentRows <= TEXTAREA_MAX_ROWS) {
			rows = this.props.data.currentRows;
		} else {
			rows = this.props.data.currentRows === undefined ? TEXTAREA_MIN_ROWS : TEXTAREA_MAX_ROWS
		}

		return (
			<Textarea
				placeholder={'Введите смс-сообщение'}
				changeHeight={this.props.TextareaHeight}
				changeValue={this.props.TextareaValue}
				value={this.props.value}
				rows={rows}
			/>
		)
	}
}

const mapStateToProps = (state) => ({
	data: state.changeTextareaHeight,
	value: state.changeTextareaValue.value,
});

const mapDispatchToProps = (dispatch) => ({
	TextareaHeight: (element, minRows, maxRows) => dispatch(handleTextareaHeight(element, minRows, maxRows)),
	TextareaValue: (value) => dispatch(handleTextareaValue(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TextareaContainer);