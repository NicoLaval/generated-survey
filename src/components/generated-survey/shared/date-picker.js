import React from 'react';
import { DatePicker } from 'material-ui';

let DateTimeFormat = global.Intl.DateTimeFormat;

function DatePickerPSG({ id, label, col, value, onChange, required }) {
	const inputStyle = {
		color: 'black',
	};
	const dialogContainerStyle = { color: 'red' };
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
			<div className="mui-row mui-col-md-12">
				<DatePicker
					id={id}
					style={style}
					dialogContainerStyle={dialogContainerStyle}
					inputStyle={inputStyle}
					DateTimeFormat={DateTimeFormat}
					okLabel="OK"
					cancelLabel="Annuler"
					locale="fr"
					value={(value && new Date(value)) || null}
					onChange={(e, value) => onChange(value)}
					errorText={errorText}
				/>
			</div>
		</div>
	);
}

export default DatePickerPSG;
