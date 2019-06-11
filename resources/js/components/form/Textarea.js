import React from 'react';

import {
	TEXTAREA_MIN_ROWS,
	TEXTAREA_MAX_ROWS
} from "../../constants/defaultConstants";


class Textarea extends React.Component {
	render() {
		return (
			<div className={'input-wrapper'}>
				<textarea
					className={'letter-message'}
					value={this.props.value}
					placeholder={this.props.placeholder}
					onInput={(event) => {
						this.props.changeHeight(event, TEXTAREA_MIN_ROWS, TEXTAREA_MAX_ROWS);
						this.props.changeValue(event.target.value);
					}}
					rows={this.props.rows}
				/>
			</div>
		);
	}

}

export default Textarea;