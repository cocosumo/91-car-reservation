import {fetchConflictByCarAndDate} from '../api/fetchConflictByCarAndDate';
import {fetchConflictByDateExceptId} from '../api/fetchConflictByCarAndDateExceptId';


export const getConflictReservations = async (record: DB.SavedRecord, isByCar = false) => {
	const {
		開始: startDateTime,
		終了: endDateTime,
		号車: selectedCar,
		$id,
	} = record;


	const recordId = $id ? $id.value : '';

	if (isByCar) {
		return fetchConflictByCarAndDate(selectedCar.value, startDateTime.value, endDateTime.value, recordId);
	}

	return fetchConflictByDateExceptId(startDateTime.value, endDateTime.value, recordId);
};