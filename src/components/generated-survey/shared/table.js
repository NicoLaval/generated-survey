import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {
	Table,
	TableBody,
	TableHeader,
	TableHeaderColumn,
	TableRow,
	TableRowColumn,
} from 'material-ui';

export default class TablePSG extends Component {
	state = {
		selected: [1],
		redirection: '',
	};

	isSelected = index => {
		return this.state.selected.indexOf(index) !== -1;
	};

	handleRowSelection = selectedRows => {
		//const todoForSurvey = todo.map(row => {if (row.idSurvey === this.props.)});
		const { idSurvey, id } = this.props.todo[selectedRows];
		this.setState({
			redirection: `/survey/${idSurvey}/${id}`,
		});
	};

	render() {
		const { todo, surveys } = this.props;
		const { redirection } = this.state;
		const rows = todo.map(row => {
			const { number, street, postalCode, city } = row.adress;
			const survey = surveys.find(s => s.id === row.idSurvey);
			if (!survey) return null;
			const fullAdress = `${number} ${street} - ${postalCode} ${city}`;
			return (
				<TableRow key={`${row.idSurvey}-${fullAdress}`}>
					<TableRowColumn>{survey.label}</TableRowColumn>
					<TableRowColumn>{fullAdress}</TableRowColumn>
				</TableRow>
			);
		});
		const headerStyle = { textAlign: 'center', fontSize: '20px' };

		if (redirection) return <Redirect to={redirection} />;
		return (
			<Table onRowSelection={this.handleRowSelection}>
				<TableHeader displaySelectAll={false} adjustForCheckbox={false}>
					<TableRow>
						<TableHeaderColumn style={headerStyle}>Enquête</TableHeaderColumn>
						<TableHeaderColumn style={headerStyle}>Adresse</TableHeaderColumn>
					</TableRow>
				</TableHeader>
				<TableBody
					showRowHover={true}
					stripedRows={true}
					displayRowCheckbox={false}
				>
					{rows}
				</TableBody>
			</Table>
		);
	}
}
