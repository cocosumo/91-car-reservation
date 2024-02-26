import {DateTime} from 'luxon';
const dt = DateTime;

export const isValidTimeDuration = (
	start: string | undefined, 
	end: string | undefined,
) => {
	if (!start || !end) return false;

	return dt.fromISO(start) < dt.fromISO(end);
};