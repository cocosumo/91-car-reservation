import {KintoneRestAPIClient} from '@kintone/rest-api-client';
import dotenv from 'dotenv';

export type Options = ConstructorParameters<typeof KintoneRestAPIClient>[0];

const getOptions = (): Options => {
	const environment = process.env.NODE_ENV;
  
	switch (environment) {
		case 'test':
			dotenv.config({path: '.env.development'});
			console.log('test', process.env.KINTONE_BASE_URL, process.env.KINTONE_API_TOKEN_38);
			return {
				baseUrl: process.env.KINTONE_BASE_URL,
				auth: {
					apiToken: process.env.KINTONE_API_TOKEN_38,
				},
			};
		default:
			return {};
	}
};

export const client = new KintoneRestAPIClient(getOptions());