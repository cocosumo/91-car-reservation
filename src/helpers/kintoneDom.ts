
type AppRecord = {
	recordId: string;
	appId?: string;
	domain?: string | undefined;
};


export const isMobile = () => (window?.location.href || '').includes('k/m');

export const getAppId = (): number | undefined => {
	const url = window?.location.href;
	if (!url) return 0;

	return (
		(url.includes('k/m') ? kintone.mobile.app.getId() : kintone.app.getId()) ??
    undefined
	);
};

export const getSpaceElement = (spaceId: string) =>
	isMobile()
		? kintone.mobile.app.record.getSpaceElement(spaceId)
		: kintone.app.record.getSpaceElement(spaceId);


export const getRecordPath = (
	{
		recordId,
		appId,
		domain,
	}: AppRecord,
): string => {
	const nDomain = domain ? domain : window.location.origin;
	const nDevice = isMobile() ? 'k/m' : 'k';
	const nrecord = recordId
		? `show${isMobile() ? '?' : '#'}record=${recordId}`
		: '';
    
	return `${nDomain}/${nDevice}/${appId}/${nrecord}`;
    
};

export const goToRecordPath = (recordDetails: AppRecord) => {
	window?.open(getRecordPath(recordDetails), '_blank')?.focus();
};
