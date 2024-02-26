import {fetchReservations} from './fetchReservations';

/**
 * Fetch conflict record according to date
 *
 * @param start start dateTime
 * @param end end dateTime
 * @param carNumber optional filter.
 * @returns kintone records
 */
export const fetchConflictByDate = async (start: string, end: string, carNumber: string | undefined = undefined) => {

	const conditions = [
		`開始 <= "${end}"`,
		`終了 >= "${start}" `,
	];

	if (carNumber) conditions.push(`号車="${carNumber}"`);

	return fetchReservations(
		conditions.join(' and '),
	);
};
