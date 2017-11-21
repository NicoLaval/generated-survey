import React from 'react';
import TextField from 'material-ui/TextField';

function Input({ id, label, value, onChange, required, disabled, col }) {
	const inputStyle = {
		color: 'black',
	};
	const style = {
		width: '40%',
		marginBottom: '20px',
	};

	const errorText = value || !required ? '' : 'This field is required';

	return (
		<div className={`mui-col-md-${col}`}>
			<div className="mui-row">
				<label className="mui-col-md-12">{label}</label>
			</div>
			<div className="mui-row">
				<TextField
					className="mui-col-md-12"
					id={id}
					style={style}
					inputStyle={inputStyle}
					value={value}
					onChange={e => onChange(e.target.value)}
					disabled={disabled}
					errorText={errorText}
				/>
			</div>
		</div>
	);
}

export default Input;
