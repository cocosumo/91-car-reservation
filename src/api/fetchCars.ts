import {client} from './kintone/client';

const carsAppId = 38;


export const fetchCars = async ()  => client.record.getRecords({
	app: carsAppId,
}).then((resp) => resp.records as unknown as kintone.types.SavedCarAppFields[]);