import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

function DialogPSG({ text, title, close }) {
	const actions = [
		<FlatButton label="Fermer" primary={true} onClick={close} />,
	];
	return (
		<div>
			<Dialog
				title={title}
				actions={actions}
				modal={false}
				open={true}
				onRequestClose={close}
			>
				{text}
			</Dialog>
		</div>
	);
}

export default DialogPSG;
