export const buildState = data =>
	data.survey.reduce((_, e) => {
		_[e.variable] = '';
		return _;
	}, {});

export const buildMultiState = data => {
	const state = data.fields.reduce((_, e) => {
		_[e.variable] = new Array(data.max).fill('');
		return _;
	}, {});
	return { multiIndividualResponse: '', ...state };
};
