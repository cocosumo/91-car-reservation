import {fetchReservations} from './fetchReservations';

/**
 * Fetch conflict records based on date, and car except the provided recordId
 *
 * @param carNumber
 * @param start start dateTime
 * @param end end dateTime
 * @param recordId recordID to be excempted
 * @returns kintone records
 */
export const fetchConflictByCarAndDate = async (
	carNumber: string, 
	start: string, 
	end: string, 
	recordId: string,
) => fetchReservations(
	`$id!="${recordId}" and 号車="${carNumber}" and 開始 <= "${end}" and 終了 >= "${start}" `,
);