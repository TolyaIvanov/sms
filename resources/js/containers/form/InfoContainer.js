import React from 'react'
import {connect} from "react-redux";
import Info from "../../components/form/Info";

class InfoContainer extends React.Component {
	render() {
		return (
			<Info
				letters={this.props.data.value ? this.props.data.value.length : 0}
				number={this.props.data.number}
			/>
		);
	}
}

const mapStateToProps = (state) => ({
	data: state.changeTextareaValue
});

export default connect(mapStateToProps, null)(InfoContainer);