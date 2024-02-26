import {kintoneProxyWrapper} from '@helpers/kitoneProxyWrapper';
import {apiKey, notifEmail, notifEmailWest, sendEmailEndpoint, senderEmail} from '../config';
import {generateHTMLNotification} from '../helpers/generateHTMLNotifcation';


export const sendEmail = async (event: { 
	record: DB.SavedRecord;
	type: string; 
}) => {
	const {
		record,
		type,
	} = event;
	const {
		$revision,
		reservingPerson,
		territory,
	} = record;

	const isNew = type.includes('create');

	if (!apiKey) throw new Error('API_KEY is not defined');

	const recipients = [
		{
			'name': '報告用',
			'email': notifEmail,
		},
	];

	if (territory.value.includes('西')) {
		recipients.push({
			'name': '本社経理',
			'email': notifEmailWest,
		});
	}


	const result = await kintoneProxyWrapper({
		method: 'POST',
		url: sendEmailEndpoint,
		data: {
			'to': recipients,
			'from': senderEmail,
			'subject': `社有車予約のお知らせ : ${reservingPerson.value} - ${isNew ? '新規' : `編集(${$revision.value})`}`,
			// 'text': '$id',
			'html': generateHTMLNotification(event),
		},
		headers: {
			'Content-Type': 'application/json',
			'x-api-key': apiKey,
		},
	}).catch((error) => {
		console.error(error);
	});

	return result;
  

};