export const incompleteRequired = (dataSurvey, state) => {
	const requiredFields = dataSurvey
		.filter(
			e =>
				(e.required && !e.filter) ||
				(e.required &&
					e.filter &&
					e.filter.type === 'equal' &&
					state[e.filter.variable] === e.filter.value)
		)
		.reduce((_, e) => {
			// Multi attr
			if (e.type === 'multiIndividualResponse') {
				e.fields.map(f => {
					const multiState = state['multiIndividualResponse'];
					const array = multiState[f.variable];
					const nbIndividual = multiState['multiIndividualResponse'];
					if (f.required && incompleteArray(array, nbIndividual))
						_.push(f.variable);
					return null;
				});
			}

			// Simple attr
			if (!state[e.variable]) _.push(e.variable);
			return _;
		}, []);
	return requiredFields.length === 0 ? true : false;
};

const incompleteArray = (array, size) => {
	if (size > 0) {
		const subArray = array.slice(0, size);
		if (subArray.includes('')) return true;
	}
};
