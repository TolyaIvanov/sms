import React from 'react';

import SendRequestButtonContainer from '../../containers/form/controls/SendRequestButtonContainer';
import InputContainer from '../../containers/form/TextareaContainer';
import CheckboxContainer from './../../containers/form/controls/CheckboxContainer'
import InfoContainer from './../../containers/form/InfoContainer'

class Form extends React.Component {
	render() {
		return (
			<form name={'palindrome_field'} className={'form'}>
				<InputContainer/>
				<div className="controls">
					<SendRequestButtonContainer/>
					<CheckboxContainer/>
				</div>
				<InfoContainer/>
			</form>
		);
	}
}

export default Form;