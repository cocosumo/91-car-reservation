import {fetchReservations} from './fetchReservations';

/**
 * Fetch conflict records based on date except the provided recordId
 *
 * @param start start dateTime
 * @param end end dateTime
 * @param recordId recordID to be excempted
 * @returns kintone records
 */
export const fetchConflictByDateExceptId = async (start: string, end: string, recordId: string) => fetchReservations(
	`$id!="${recordId}" and 開始 <= "${end}" and 終了 >= "${start}" `,
);
