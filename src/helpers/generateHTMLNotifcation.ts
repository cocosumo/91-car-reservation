import {type KintoneEvent} from '../types/event';
import {DateTime as dt} from 'luxon';
import {constIndexViewId, currAppId} from '../config';
import {getRecordPath} from './kintoneDom';

const formatDateTime = (dateTimeISO: string, isFullDay = false) => {
	if (!dateTimeISO) return '-';
	const dateTimeStr = dt.fromISO(dateTimeISO).toFormat(`yyyy-MM-dd${isFullDay ? '' :  ' HH:mm'} `);

	return dateTimeStr;
};



export const generateHTMLNotification = (event: KintoneEvent) => {
	const {
		record,
		type,
	} = event;
	const {
		$revision,
		$id,
		店舗,
		備考,
		returnDate,
		reservingPerson,
		号車,

		// 期間,
		開始, 
		終了,

		fullDay,
	} = record;


	const appId = String(currAppId);
	const isNew = type.includes('create');
	const isFullDay = fullDay.value.includes('終日');
	const kintoneLink = getRecordPath({ 
		recordId: $id.value,
		appId, 
	});

	const monthViewLink = `https://rdmuhwtt6gx7.cybozu.com/k/${appId}/?view=${constIndexViewId}`;

	const startDate = formatDateTime(開始.value, isFullDay);
	const endDate = formatDateTime(終了.value, isFullDay);

	// Human readable duration between dates like 5日5時間30分
	const humanReadable = dt.fromISO(終了.value).diff(dt.fromISO(開始.value), ['days', 'hours', 'minutes'])
		.toHuman()
		.replace(' days,', '日')
		.replace(' hours,', '時間')
		.replace(' minutes', '分');

	return (
		`
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>社有車予約のお知らせ : ${reservingPerson.value} - ${isNew ? '新規' : `編集(${$revision.value})`}</title>
  <style>
    table {
      border-collapse: collapse;
      border-radius: 8px;
    }
    table, th, td {
      border: 1px solid #e5e7eb;
      text-align: left;
      padding: 16px;
    }

  </style>
</head>
<body>
  <p>拝啓、担当者の皆様</p>

  <p>お世話になっております。内部利用車の予約を以下の通りご案内申し上げます。</p>

  <table>
    <tr>
      <th>予約番号</th>
      <td>${$id.value || '-'}</td>
    </tr>
    <tr>
      <th>店舗</th>
      <td>${店舗.value || '-'}</td>
    </tr>
    <tr>
      <th>備考</th>
      <td>${備考.value || '-'}</td>
    </tr>
    <tr>
      <th>利用者</th>
      <td>${reservingPerson.value || '-'}</td>
    </tr>
    <tr>
      <th>号車</th>
      <td>${号車.value || '-'}</td>
    </tr>
    <tr>
      <th>開始日時</th>
      <td>${startDate}</td>
    </tr>
    <tr>
      <th>終了日時</th>
      <td>${endDate}</td>
    </tr>
        <tr>
      <th>利用期間</th>
      <td>${humanReadable || '-'}</td>
    </tr>
    <tr>
      <th>返却日時</th>
      <td>${formatDateTime(returnDate.value, isFullDay)}</td>
    </tr>
  </table>

  <p>
      <a href="${kintoneLink}">詳細はこちら</a>
  </p>

  <p>
      <a href="${monthViewLink}">カレンダーで見る</a>
  </p>

  <p>どうぞよろしくお願い申し上げます。</p>


  <p>敬具</p>
</body>
</html>
`);
};