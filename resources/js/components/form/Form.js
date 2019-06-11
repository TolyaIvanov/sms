import React from 'react';

import SendRequestButtonContainer from '../../containers/form/controls/SendRequestButtonContainer';
import InputContainer from '../../containers/form/TextareaContainer';
import CheckboxContainer from './../../containers/form/controls/CheckboxContainer'

class Form extends React.Component {
	render() {
		return (
			<form name={'palindrome_field'} className={'form'}>
				<InputContainer/>
				<div className="controls">
					<SendRequestButtonContainer/>
					<CheckboxContainer/>
				</div>
			</form>
		);
	}
}

export default Form;