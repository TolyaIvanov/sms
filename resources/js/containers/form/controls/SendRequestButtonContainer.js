import React from 'react'
import {connect} from "react-redux";

import SendRequestButton from '../../../components/form/controls/SendRequestButton'

import {
	fetchOneSms
} from "../../../actions/requests/sendRequest";

class SendRequestButtonContainer extends React.Component {
	render() {
		return (
			<SendRequestButton
				isLoading={this.props.requestData}
				sendSms={this.props.fetchNewSms}
			/>
		);
	}
}

const mapStateToProps = (state) => ({
	requestData: state.fetchPalindromeIsLoading,
});

const mapDispatchToProps = (dispatch) => ({
	fetchNewSms: (url) => dispatch(fetchOneSms(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(SendRequestButtonContainer);