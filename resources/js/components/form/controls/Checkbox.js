import React from 'react'

class Checkbox extends React.Component{
	render() {
		return (
			<div className={'checkbox-wrapper'}>
				<p className={'checkbox-title'}>Переключить шрифт</p>
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
