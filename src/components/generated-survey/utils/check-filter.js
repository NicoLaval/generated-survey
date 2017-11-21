export const checkFilter = (data, survey) => {
	const surveyStructure = survey.survey;
	const toCheck = surveyStructure.reduce((_, e) => {
		if (e['filter'])
			_.push({
				mainVar: e['filter']['variable'],
				secondVar: e['variable'],
				value: e['filter']['value'],
				type: e['filter']['type'],
			});
		return _;
	}, []);
	toCheck.map(f => {
		if (f.type === 'equal' && data[f.mainVar] !== f.value) {
			data[f.secondVar] = '';
		}
		return data;
	});
	return data;
};
