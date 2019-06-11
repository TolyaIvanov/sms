import React from 'react';

class Info extends React.Component {
	render() {
		return (
			<div className={'sms-info'}>
				<p className={'value-length'}>Количество символов: {this.props.letters}</p>
				<p className={'value-length'}>Количество sms-сообщений: {this.props.number}</p>
			</div>
		);
	}
}

export default Info;
