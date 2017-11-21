export const buildData = data => {
	if (data['multiIndividualResponse']) {
		data['multiIndividualResponse'] = cleanMulti(
			data['multiIndividualResponse']
		);
		data['multiIndividualResponse'] = convertMulti(
			data['multiIndividualResponse']
		);
	}
	return data;
};

const cleanMulti = data => {
	if (data['multiIndividualResponse']) {
		return data['multiIndividualResponse'] > 0
			? Object.keys(data).reduce((_, key, i) => {
					if (key !== 'multiIndividualResponse')
						_[key] = data[key].slice(0, data['multiIndividualResponse']);
					return _;
				}, {})
			: {};
	}
	return {};
};

const convertMulti = data =>
	Object.keys(data).reduce((_, key) => {
		data[key].map((e, i) => (_[i] = { ..._[i], [key]: e }));
		return _;
	}, []);
