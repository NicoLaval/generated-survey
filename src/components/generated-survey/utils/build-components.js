import React from 'react';
import Input from '../shared/input';
import Select from '../shared/select';
import DatePicker from '../shared/date-picker';
import MultiIndividualResponse from '../shared/multi-individual-response';

export const buildComponents = (
	data,
	state,
	handleChange,
	codeList,
	i,
	multi
) =>
	data.map(s => {
		const { type, label, variable, options, required, filter } = s;
		const value = Number.isInteger(i) ? state[variable][i] : state[variable];
		const handle = Number.isInteger(i)
			? e => handleChange(e, variable, i)
			: e => handleChange(e, variable);
		if (
			filter &&
			filter.type === 'equal' &&
			state[filter.variable] !== filter.value
		)
			return null;

		if (type === 'input')
			return (
				<div className="mui-row" key={variable}>
					<Input
						col="12"
						id={variable}
						label={label}
						value={value}
						onChange={handle}
						required={required}
					/>
				</div>
			);
		if (type === 'select')
			return (
				<div className="mui-row" key={variable}>
					<Select
						col="12"
						id={variable}
						label={label}
						options={options}
						codeList={codeList}
						value={value}
						onChange={handle}
						required={required}
					/>
				</div>
			);
		if (type === 'date-picker')
			return (
				<div className="mui-row" key={variable}>
					<DatePicker
						col="12"
						id={variable}
						label={label}
						value={value}
						onChange={handle}
						required={required}
					/>
				</div>
			);
		if (type === 'multiIndividualResponse')
			return (
				<div className="mui-row" key={variable}>
					<MultiIndividualResponse
						col="12"
						id={variable}
						survey={s}
						options={options}
						codeList={codeList}
						value={value}
						onChange={handle}
					/>
				</div>
			);
		return null;
	}, {});
