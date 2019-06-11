import React from 'react';
import {connect} from 'react-redux';

import Textarea from './../../components/form/Textarea';

import {
	TEXTAREA_MAX_ROWS,
	TEXTAREA_MIN_ROWS
} from "../../constants/defaultConstants";

import {
	handleTextareaHeight,
} from "../../actions/form/validateTextarea";

import {
	changeTextareaValue,
} from "../../actions/form/actionsCreator";


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
	value: state.changeTextareaValue,
});

const mapDispatchToProps = (dispatch) => ({
	TextareaHeight: (element, minRows, maxRows) => dispatch(handleTextareaHeight(element, minRows, maxRows)),
	TextareaValue: (value) => dispatch(changeTextareaValue(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TextareaContainer);