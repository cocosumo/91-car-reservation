import {createRoot} from 'react-dom/client';
import {AvailableCarsV2} from './AvailableCarsV2';
import {fetchCars} from '../../api/fetchCars';
import {getSpaceElement} from '@helpers/kintoneDom';

console.log('ENVVARIABLES', process.env.reportEmail);

const renderAvailableCarsContainer = async (record: kintone.types.SavedCarAppFields) => {
	const allCars = await fetchCars();
	const container = getSpaceElement('available-cars');
	if (!container) return;

	const root = createRoot(container);

	root.render( 
		<AvailableCarsV2
			initialRecord={record}
			allCars={allCars}
		/>,
	);


};

export const onEditOrCreateHandler = async (event: {
	record: kintone.types.SavedCarAppFields;
}) => {
	const {record} = event;
	console.log('record:', record);

	await renderAvailableCarsContainer(record);

	return event;
};