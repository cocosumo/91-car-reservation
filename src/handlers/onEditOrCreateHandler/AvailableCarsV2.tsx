

import {Message} from '../../components/message/Message';
import {Table} from '../../components/table/Table';
import {useChangeListener} from './useChangeListener';


export const AvailableCarsV2 = (props: {
	allCars: kintone.types.SavedCarAppFields[];
	initialRecord: kintone.types.SavedCarAppFields;
}) => {
	const {allCars, initialRecord} = props;
	const {
		isDurationEmpty,
		isValidDuration,
		isNoDuration,
		isCarSelected,
		isSelectedCarAvailable,
		isOtherCarsAvailable,
		arrOtherAvailableCars,
	} = useChangeListener({
		initialRecord,
		allCars,
	});


	return (
		<>

			{!isDurationEmpty && !isValidDuration &&
      <Message isSuccess={false}>
      	{isNoDuration ? '終了日と開始日が一緒' : '終了日が開始日より前の日付'}
        になっています。終了日は開始日以降の日付を指定して下さい。
      </Message>}

			{isDurationEmpty &&
      <Message isSuccess={false}>
        期間を入力してください。
      </Message>}


			{isValidDuration &&
        <Message isSuccess={isSelectedCarAvailable}>
        	{isSelectedCarAvailable && <>
            【Success！】予約可能です。
        	</>}
        	{!isSelectedCarAvailable && isCarSelected && <>
            指定の期間で予約出来ません。
        	</>}
        	{!isSelectedCarAvailable && !isCarSelected && <>
            車を選択してください。
        	</>}
        	{isOtherCarsAvailable && (
        		<>
              ※以下の車
        			{isSelectedCarAvailable ? <>
                も
        			</> : <>
                なら
        			</>}
              予約可能です。
        		</>
        	)}
        </Message>}

			{isValidDuration && isOtherCarsAvailable && (
				<Table
					headers={['id', '号車', '店舗']}
					rows={arrOtherAvailableCars}
				/>
			)}
		</>
	);
};



