import {getAppId} from '../helpers/kintoneDom';
import {client} from './kintone/client';

/**
 * Fetch all records if condition is not provided
 *
 * @param condition optional filter condition
 * @returns
 */
export const fetchReservations = async (condition = '') => {

	const appId = getAppId();

	if (!appId) {
		throw new Error('App ID is not defined');
	}

	return client.record.getRecords({
		app: appId,
		query: condition,
	}).then((resp) => resp.records as unknown as DB.SavedRecord[]);

};
