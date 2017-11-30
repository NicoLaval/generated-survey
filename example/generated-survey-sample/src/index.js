import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import { GeneratedSurvey } from 'generated-survey';
import { todo, survey, codeList } from './data';
import './app.css';

const { number, street, postalCode, city } = todo.adress;
const adressLabel = `Adresse du ménage : ${number} ${street} - ${
	postalCode
} - ${city}`;

const jsx = (
	<MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
		<div className="mui-container">
			<div className="mui-row">
				<h1 style={{ textAlign: 'center', marginBottom: '30px' }}>
					'generated-survey' plugin sample
				</h1>
				<h1 style={{ textAlign: 'center', marginBottom: '30px' }}>
					{survey.label}
				</h1>
			</div>
			<div className="mui-row">
				<h4 className="mui-col-md-12 centered">{adressLabel}</h4>
			</div>
			<div className="mui-row">
				<GeneratedSurvey
					todo={todo}
					survey={survey}
					codeList={codeList}
					onClickBack={() => console.log('retour')}
					onClicksave={data => console.log(data)}
					onClickCloseModal={() => console.log('Close confirm modal')}
				/>
			</div>
		</div>
	</MuiThemeProvider>
);

ReactDOM.render(jsx, document.getElementById('example'));
