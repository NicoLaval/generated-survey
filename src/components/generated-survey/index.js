import React, { Component } from 'react';
import Button from './shared/button';
import Dialog from './shared/dialog';
import { buildState } from './utils/build-state';
import { buildComponents } from './utils/build-components';
import { buildData } from './utils/build-data';
import { incompleteRequired } from './utils/check-required';
import { clearEmpty } from './utils/clear-empty';
import { checkFilter } from './utils/check-filter';

class GeneratedSurvey extends Component {
	constructor(props) {
		super();
		const { todo, survey, onClickBack, onClicksave, onClickCloseModal } = props;

		this.state = buildState(survey);

		this.handleChange = (value, name) => {
			this.setState({ [name]: value });
		};

		this.back = () => {
			onClickBack();
		};
		this.save = () => {
			var data = { ...todo, ...this.state };
			data = buildData(data);
			data = checkFilter(data, survey);
			data = clearEmpty(data);
			onClicksave(data);
			this.setState({ dialog: true });
		};
		this.closeDialog = () => {
			onClickCloseModal();
			this.setState({ dialog: false });
		};
	}

	render() {
		const { survey: { survey }, codeList } = this.props;
		const { dialog } = this.state;

		const components = buildComponents(
			survey,
			this.state,
			this.handleChange,
			codeList
		);
		const saveDisabled = !incompleteRequired(survey, this.state);

		return (
			<div>
				<Button back={this.back} save={this.save} saveDisabled={saveDisabled} />
				{dialog && (
					<Dialog
						text="Le formulaire a bien été enregistré"
						title="Confirmation"
						close={this.closeDialog}
					/>
				)}
				<div>{components}</div>
			</div>
		);
	}
}

export default GeneratedSurvey;
