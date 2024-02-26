/* Import getConflictReservations from '../helper/getConflictReservations';
import { showCantReserveError } from '../helper/showAlert';
import isValidTimeDuration from '../helper/validations/isValidTimeDuration';
 */

import {getConflictReservations} from '../../helpers/getConflictReservation';
import {isValidTimeDuration} from '../../helpers/isValidTimeDuration';
import {showCantReserveError} from '../../helpers/showAlert';

export const onSubmitHandler = async (event: {
	record: DB.SavedRecord;
}) => {
	const {record} = event;
	const {
		開始,
		終了,
	} = record;

	let isWithConflict = false;
	console.log('dates', 開始, 終了);

	if (開始.value && 終了.value) {
		const conflictReservations = await getConflictReservations(record, true);
		isWithConflict = conflictReservations.length > 0;
	}

	const isValid = !isWithConflict && isValidTimeDuration(開始.value, 終了.value);

	if (!isValid) showCantReserveError();

	return isValid;
};

