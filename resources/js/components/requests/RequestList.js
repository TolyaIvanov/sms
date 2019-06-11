import React from 'react'

const RequestList = props => (
	<div className={'requests'}>
		<h3 className={'title'}>Request list</h3>
		<div className="columns-header">
			<div className="value-title">Сообщение</div>
			<div className="title">Количество сообщений</div>
		</div>
		<ul className={'request-list'}>
			{
				props.children
			}
		</ul>
	</div>
);

export default RequestList;