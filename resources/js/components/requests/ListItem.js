import React from 'react'

class ListItem extends React.Component {
	render() {
		return (
			<li className={'request-list-item'}>
				<div className={'value'}> {this.props.value} </div>
				<div className={'number'}> {this.props.sms} </div>
			</li>
		);
	}
}

export default ListItem;