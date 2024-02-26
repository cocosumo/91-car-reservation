
export type BasicCarDetails = {
	レコード番号: {value: string};
	号車: {value: string};
	店舗: {value: string};
};

export const extractBasicCarDetails = ({ 
	レコード番号, 
	号車, 
	店舗, 
}: BasicCarDetails) => {
	const recordId = レコード番号 ? レコード番号.value : 0;
  
	return [recordId, 号車.value, 店舗.value];
};


export const toArray = (records: BasicCarDetails[]) => records.map(extractBasicCarDetails);
