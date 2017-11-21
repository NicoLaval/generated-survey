import React from 'react';
import PropTypes from 'prop-types';
import { RaisedButton } from 'material-ui';

function Button({ back, save, saveDisabled }) {
	const style = {
		marginBottom: '20px',
		fontWeight: 'bold',
		labelColor: '#FFFFFF',
		width: '100%',
		padding: 0,
	};
	const returnButton = (
		<div className="mui-col-md-2">
			<RaisedButton
				label="Retour"
				style={style}
				onClick={back}
				className="mui-col-md-12"
			/>
		</div>
	);

	const saveButton = (
		<div className="mui-col-md-offset-8 mui-col-md-2">
			<RaisedButton
				label="Sauvegarder"
				style={style}
				className="mui-col-md-12"
				onClick={save}
				disabled={saveDisabled}
			/>
		</div>
	);

	if (save)
		return (
			<div className="mui-row">
				{returnButton}
				{saveButton}
			</div>
		);

	return <div className="mui-row">{returnButton}</div>;
}

Button.propTypes = {
	back: PropTypes.func.isRequired,
	save: PropTypes.func,
	saveDisabled: PropTypes.bool,
};

export default Button;
