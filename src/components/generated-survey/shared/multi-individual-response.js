import React, { Component } from 'react';
import Select from './select';
import Tabs from './tabs';
import { buildMultiState } from '../utils/build-state';
import { buildComponents } from '../utils/build-components';

class MultiIndividualResponse extends Component {
	constructor(props) {
		super();
		const { survey, onChange } = props;

		this.state = buildMultiState(survey);

		this.handleChange = (value, name, i) => {
			if (Number.isInteger(i)) {
				const array = this.state[name];
				array[i] = value;
				this.setState({ [name]: array });
			} else {
				this.setState({ [name]: value });
			}
			onChange(this.state);
		};
	}

	render() {
		const { multiIndividualResponse } = this.state;
		const {
			survey,
			survey: { fields, variable, label },
			col,
			codeList,
		} = this.props;

		const style = {
			border: '2px solid #ee3467',
			marginBottom: '20px',
			padding: '10px',
		};

		const tabs =
			multiIndividualResponse &&
			Array(multiIndividualResponse)
				.fill()
				.map((e, i) => i + 1)
				.reduce((_, e, i) => {
					_.push({
						label: `${i + 1}`,
						content: buildComponents(
							fields,
							this.state,
							this.handleChange,
							codeList,
							i,
							true
						),
					});
					return _;
				}, []);

		return (
			<div className={`mui-col-md-${col}`}>
				<div className="mui-row">
					<Select
						col="12"
						id={variable}
						key={variable}
						label={label}
						min={survey.min}
						max={survey.max}
						value={this.state[variable]}
						onChange={e => this.handleChange(e, variable)}
						required={true}
					/>
				</div>
				{multiIndividualResponse > 0 && (
					<div style={style}>
						<h4 style={{ textAlign: 'center' }}>
							Veuillez renseigner les champs ci-dessous pour chaque individu
						</h4>
						<Tabs tabs={tabs} />
					</div>
				)}
			</div>
		);
	}
}

export default MultiIndividualResponse;
