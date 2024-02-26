import {describe, it} from '@jest/globals';
import {apiKey, notifEmail, notifEmailWest, sendEmailEndpoint, senderEmail} from '../config';
import {kintoneProxyWrapper} from '../helpers/kitoneProxyWrapper';

describe('sendEmail', () => {

	it('should send email', async () => {
		if (!apiKey) throw new Error('API_KEY is not defined');

		const result = await kintoneProxyWrapper({
			method: 'POST',
			url: sendEmailEndpoint,
			data: {
				'to': [
					{
						'name': '報告用',
						'email': notifEmail,
					},
					{
						'name': '本社',
						'email': notifEmailWest,
					},
				],

				'from': senderEmail,
				'subject': '社有車予約のお知らせ(テスト)',
				// 'text': '$id',
				'html': '<b>テストです。無視してください。</b>',
			},
			headers: {
				'Content-Type': 'application/json',
				'x-api-key': apiKey,
			},
		}).catch((error) => {
			console.error(error);
		});

		console.log(result);

	}, 8000);

});