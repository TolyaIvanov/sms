import React from 'react'
import {connect} from "react-redux";

import RequestList from './../../components/requests/RequestList'
import ListItem from './../../components/requests/ListItem'

import {
	DEFAULT_URL
} from "../../constants/defaultConstants";

import {
	fetchSmsList
} from "../../actions/requests/sendRequest";


class RequestListContainer extends React.Component {
	componentDidMount() {
		this.props.fetchData(`${DEFAULT_URL}notes/all`);
	}

	render() {
		return (
			<RequestList>
				{
					this.props.data && this.renderRequestList()
				}
			</RequestList>
		);
	}

	renderRequestList = () => {
		return this.props.data.map((listItem) => (
			<ListItem
				key={listItem.id}
				value={listItem.value}
				sms={listItem.number}
			/>
		));
	};
}

const mapStateToProps = state => ({
	isLoading: state.allRequestsIsLoading,
	data: state.fetchSmsList.data,
});

const mapDispatchToProps = dispatch => ({
	fetchData: (url) => dispatch(fetchSmsList(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(RequestListContainer);