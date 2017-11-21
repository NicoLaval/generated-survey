import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

function Select({
	id,
	label,
	options,
	value,
	onChange,
	required,
	disabled,
	col,
	min,
	max,
	codeList,
}) {
	const labelStyle = {
		color: 'black',
	};
	const style = {
		color: 'black',
		width: '40%',
		marginBottom: '20px',
	};
	const errorText =
		value || Number.isInteger(value) || !required
			? ''
			: 'This field is required';
	var data;
	if (!options) {
		data = Array(max + 1)
			.fill()
			.map((e, i) => i)
			.filter(i => i >= min)
			.map(i => <MenuItem key={i} value={i} primaryText={i + ''} />);
		// i+'' => trick to display 0
	} else {
		if (codeList)
			data = codeList[options].map(code => (
				<MenuItem key={code.id} value={code.id} primaryText={code.value} />
			));
	}

	return (
		<div className={`mui-col-md-${col}`}>
			<div className="mui-row">
				<label className="mui-col-md-12">{label}</label>
			</div>
			<div className="mui-row mui-col-md-12">
				<SelectField
					value={value}
					onChange={(e, k, value) => onChange(value)}
					style={style}
					labelStyle={labelStyle}
					errorText={errorText}
				>
					{data}
				</SelectField>
			</div>
		</div>
	);
}

export default Select;
