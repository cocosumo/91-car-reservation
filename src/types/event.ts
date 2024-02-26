export type IndexEvent = {
	viewId: number;
};

export type KSavedRecord = keyof DB.SavedRecord;

export type KintoneEvent = {
	record: DB.SavedRecord;
	type: string;
};