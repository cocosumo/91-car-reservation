import {getAppId} from './helpers/kintoneDom';

export const prodAppId = 91;
export const currAppId = getAppId();

export const isProd = currAppId === prodAppId;

export const constIndexViewId = isProd ? 5533779 : 5533776;


export const notifEmail = process.env.reportEmail;

export const notifEmailWest = process.env.reportEmailWest;

export const senderEmail = process.env.SENDER_EMAIL;

export const baseUrl = process.env.BASE_URL;

export const apiKey = process.env.SERVER_API_KEY;

const apiRoot = 'sendgrid';

export const sendEmailEndpoint = [
	baseUrl,
	apiRoot,
	'sendEmail',
].join('/');

console.log('Running in', isProd ? 'production' : 'development');
console.log('Notifications will go to', notifEmail, notifEmailWest);
console.log('Sender email is', senderEmail);
console.log('Connected to', baseUrl);