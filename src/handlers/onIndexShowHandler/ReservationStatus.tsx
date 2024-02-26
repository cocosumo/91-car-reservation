
import {Box, Stack} from '@mui/material';
import {useState, useEffect} from 'react';

import {fetchCars} from '../../api/fetchCars';
import CarSelect from './CarSelect';
import ReservationCalendar from './reservationCalendar/ReservationCalendar';
import {type DatesSetArg} from '@fullcalendar/core';

type CarSelectInput = {
	carNumber: string;
	store: string;
	bgColor: string;
	textColor: string;
};

export default function ReservationStatus() {

	const [dateRange, setDateRange] = useState<DatesSetArg>();
	const [selectedCar, setSelectedCar] = useState<string | undefined>(undefined);
	const [cars, setCars] = useState<CarSelectInput[]>([]);

	useEffect(()=>{
		console.log('FIRED!');
		fetchCars()
			.then((records) => {
				setCars(records.map(({店舗, 号車, bgColor, textColor})=>({
					store: 店舗.value,
					carNumber: 号車.value,
					bgColor: bgColor.value,
					textColor: textColor.value,
				})));
			});
	}, []);

	const isCarsLoaded = cars.length > 0;

	return (
		<Box p={2}>
			<Stack direction="column" spacing={2} alignItems="center">
				<CarSelect {...{cars, setSelectedCar, selectedCar}} />
				{isCarsLoaded && <ReservationCalendar {...{cars, dateRange, selectedCar, setDateRange}} />}
			</Stack>
		</Box>
	);
}