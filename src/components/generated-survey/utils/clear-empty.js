export const clearEmpty = data => {
	Object.keys(data).forEach(key => data[key] === '' && delete data[key]);
	return data;
};
