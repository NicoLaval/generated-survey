import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import { GeneratedSurvey } from 'generated-survey';
import { todo, survey, codeList } from './data';

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
				<GeneratedSurvey
					todo={todo}
					survey={survey}
					codeList={codeList}
					back={() => console.log('retour')}
					save={data => console.log(data)}
				/>
			</div>
		</div>
	</MuiThemeProvider>
);

ReactDOM.render(jsx, document.getElementById('example'));
