

export const onEdit = [
	'app.record.edit.show',
	'mobile.app.record.edit.show',
];

export const onCreate = [
	'app.record.create.show',
	'mobile.app.record.create.show',
];

export const onEditSubmit = [
	'app.record.edit.submit',
	'mobile.app.record.edit.submit',
];

export const onEditSubmitSuccess = [
	'app.record.edit.submit.success',
	'mobile.app.record.edit.submit.success',
];

export const onCreateSubmit = [
	'app.record.create.submit',
	'mobile.app.record.create.submit',
];

export const onCreateSubmitSuccess = [
	'app.record.create.submit.success',
	'mobile.app.record.create.submit.success',
];

export const onIndexShow = [
	'app.record.index.show',
	'mobile.app.record.index.show',
];

export const onReportShow = [
	'app.report.show',
	'mobile.app.report.show',
] as const;


export const onEditOrCreate = [
	...onEdit,
	...onCreate,
];
export const onSubmit = [
	...onEditSubmit,
	...onCreateSubmit,
];

export const onSubmitSuccess = [
	...onEditSubmitSuccess,
	...onCreateSubmitSuccess,
];

export const onDetailShow = [
	'app.record.detail.show',
	'mobile.app.record.detail.show',
];



export const onFieldChange = (fields: string | string[]): string[] =>
	([] as string[]).concat(fields).reduce(
		(acc: string[], curr): string[] => acc.concat(
			`app.record.edit.change.${curr}`,
			`mobile.app.record.edit.change.${curr}`,
			`app.record.create.change.${curr}`,
			`mobile.app.record.create.change.${curr}`,
		), [],
	);