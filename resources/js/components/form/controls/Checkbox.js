import React from 'react'

class Checkbox extends React.Component{
	render() {
		return (
			<div className={'checkbox-wrapper'}>
				<input
					className={'checkbox'}
					type={'checkbox'}
					onChange={(event) => {
						this.props.toggle(event.target.checked);
					}}
					checked={this.props.isActive}
				/>
			</div>
		);
	}
}

export default Checkbox;
