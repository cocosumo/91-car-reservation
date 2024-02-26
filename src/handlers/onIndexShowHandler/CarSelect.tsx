import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {type SelectChangeEvent} from '@mui/material/Select';

type CarSelectInput = {
	carNumber: string;
	store: string;
	bgColor: string;
	textColor: string;
};

type CarSelectProps = {
	selectedCar?: string | undefined;
	setSelectedCar: (value: string) => void;
	cars: CarSelectInput[];

};

export default function CarSelect({selectedCar,
	setSelectedCar,
	cars,
}: CarSelectProps) {

	const handleChange = (event: SelectChangeEvent) => {
		setSelectedCar(event.target.value as string);
	};


	const options = cars.map((item)=>(<MenuItem key={item.carNumber} value={item.carNumber}>
		{`${item.store} ${item.carNumber}`}
	</MenuItem>));


	return (
		<Box sx={{minWidth: 220, maxWidth: 300}} >
			<FormControl fullWidth>
				<InputLabel>
          号車
				</InputLabel>
				<Select
					placeholder={selectedCar ? '号車' : '前車'}
					labelId="carNumber-select-label"
					id="carNumber-select"
					value={selectedCar ?? ''}
					label="号車"
					onChange={handleChange}
				>
					<MenuItem value="all">
            全車
					</MenuItem>
					{options}
				</Select>
			</FormControl>
		</Box>
	);
}
