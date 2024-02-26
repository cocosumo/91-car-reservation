 
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import jaLocale from '@fullcalendar/core/locales/ja';
import {useState, useEffect} from 'react';
import {parseISO} from 'date-fns';
import './ReservationCalendar.css';
import {fetchConflictByDate} from '../../../api/fetchConflictByDate';
import {type DatesSetArg, type EventInput, type EventSourceInput} from '@fullcalendar/core';
import {currAppId} from '../../../config';
import {getRecordPath} from '@helpers/kintoneDom';


type FCDateRange = DatesSetArg | undefined;

type CarSelectInput = {
	carNumber: string;
	store: string;
	bgColor: string;
	textColor: string;
};

type ReservationCalendarProps = {
	cars: CarSelectInput[];
	dateRange: FCDateRange;
	setDateRange: (dateInfo: FCDateRange) => void;
	selectedCar: string | undefined;
};

export default function ReservationCalendar({
	cars,
	dateRange,
	setDateRange,
	selectedCar,
}: ReservationCalendarProps) {

	const [reservations, setReservations] = useState<EventSourceInput>();

	useEffect(()=>{
		if (!dateRange) return;
		const {startStr, endStr} = dateRange;
		const isAllCarSelected = selectedCar === 'all' || !selectedCar;

		fetchConflictByDate(startStr, endStr, isAllCarSelected ? undefined : selectedCar)
			.then((records ) => {
				setReservations(()=>records.map<EventInput>((record) => {
					const {
						reservingPerson: {value: reservingPerson},
						// 申請者: { value: { name: applicant } },
						号車: {value: carNumber},
						店舗: {value: store},
						開始: {value: startTime},
						終了: {value: endTime},
						$id: {value: id},
					} = record;

					const carProps = cars.find(({carNumber: _carNumber})=> _carNumber === carNumber);
					const bgColor = carProps?.bgColor;
					const textColor = carProps?.textColor;

					return {
						title: `${store}-${carNumber}号車 ${reservingPerson}`,
						start: parseISO(startTime),
						end: parseISO(endTime),
						color: bgColor,
						textColor,
						// Extended props
						recordId: id,
					};
				}));


			});

	}, [cars, dateRange, selectedCar]);

	return (
		<FullCalendar
			dayCellClassNames={['day-cell']}
			plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
			locale={jaLocale}
			fixedWeekCount={false}
			height="auto"
			initialView="dayGridMonth"
			headerToolbar={{
				left: 'prev,next today',
				center: 'title',
				right: 'dayGridMonth,timeGridWeek',
			}}
			events={reservations}
			datesSet={(dateInfo) => {
				setDateRange(dateInfo); 
			}}
			eventClick={(info) => {
				const {
					recordId,
				} = info.event.extendedProps;
				if (recordId) {
					const recordPath = getRecordPath({
						recordId,
						appId: String(currAppId),
					});

					window.open(recordPath, '_blank');
				}
			}}
		/>
	);
}