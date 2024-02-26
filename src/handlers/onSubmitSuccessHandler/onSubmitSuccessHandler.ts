import {sendEmail} from '../../api/sendEmail';
import {type KintoneEvent} from '../../types/event';

export const onSubmitSuccessHandler = async (event: KintoneEvent) => {
	const {
		record,
	} = event;

	console.log(event, record);

	const result = await sendEmail(event);

	console.log(result);

	return event;
};