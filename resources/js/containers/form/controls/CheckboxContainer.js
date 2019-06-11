import React from 'react'
import {connect} from "react-redux";

import Checkbox from '../../../components/form/controls/Checkbox';

import {
	toggleTrans,
} from "../../../actions/form/validateTextarea";

class CheckboxContainer extends React.Component {
	render() {
		return (
			<Checkbox
				isActive={this.props.isActive}
				toggle={this.props.toggle}
			/>
		);
	}
}

const mapStateToProps = (state) => ({
	isActive: state.changeCheckboxValue,
});

const mapDispatchToProps = (dispatch) => ({
	toggle: (isActive) => dispatch(toggleTrans(isActive))
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckboxContainer);