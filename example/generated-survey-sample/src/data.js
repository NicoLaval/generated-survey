export const todo = {
	id: 'toto',
	idSurvey: 'ENQ-CS',
	adress: {
		number: '1',
		street: 'rue xxx',
		postalCode: '59000',
		city: 'Lille',
	},
};

export const survey = {
	id: 'ENQ-CS',
	label: 'Enquête CS',
	survey: [
		{
			type: 'multiIndividualResponse',
			label: "Sélectionner le nombre d'actif du ménage :",
			min: 0,
			max: 10,
			variable: 'multiIndividualResponse',
			required: 'true',
			fields: [
				{
					type: 'input',
					label: 'Nom',
					variable: 'name',
					required: 'true',
				},
				{
					type: 'input',
					label: 'Prénom',
					variable: 'firstName',
					required: 'true',
				},
				{
					type: 'select',
					label: 'Sélectionner votre catégorie socio-professionnelle :',
					options: 'pcs2003level1',
					variable: 'cs1',
					required: 'true',
				},
			],
		},
		{
			type: 'select',
			label: "Le ménage est-il composé d'étudiant(s) ?",
			options: 'yesNo',
			variable: 'hasStudent',
			required: 'true',
		},
	],
};

export const codeList = {
	yesNo: [{ id: 'Y', value: 'Oui' }, { id: 'N', value: 'Non' }],
	pcs2003level1: [
		{ id: '1', value: 'Agriculteurs exploitants' },
		{ id: '2', value: "Artisans, commerçants et chefs d'entreprise" },
		{ id: '3', value: 'Cadres et professions intellectuelles supérieures' },
		{ id: '4', value: 'Professions Intermédiaires' },
		{ id: '5', value: 'Employés' },
		{ id: '6', value: 'Ouvriers' },
	],
};
