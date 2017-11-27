import React from 'react';
import ReactDOM from 'react-dom';
import { GeneratedSurvey } from 'generated-survey';
import { todo, survey, codeList } from './data';

const jsx = (
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
);

ReactDOM.render(jsx, document.getElementById('example'));
