

import {createTheme, ThemeProvider} from '@mui/material/styles';
import {isMobile} from '@helpers/kintoneDom';


const theme = createTheme({
	typography: {
		htmlFontSize: isMobile() ? 10 : 18,
	},

});

export default function CustomTheme({children}: {
	children: React.ReactNode;
}) {
	return (
		<ThemeProvider theme={theme}>
			{children}
		</ThemeProvider>
	);
}