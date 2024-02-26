import {createRoot} from 'react-dom/client';

import {constIndexViewId} from '../../config';
import ReservationStatus from './ReservationStatus';
import CustomTheme from '../../components/CustomTheme';
import  type {IndexEvent} from '../../types/event';

type AppProps = {
	viewId: number;
};

const Content = ({
	viewId,
}: {
	viewId: number;
}) => {
	switch (viewId) {
		case constIndexViewId:
			return <ReservationStatus />;
		default:
			return (<>
        Nothing
			</>);
	}
};

const App = ({viewId}: AppProps) => (
	<CustomTheme>
		<Content viewId={viewId} />
	</CustomTheme>
);



const renderBody = (viewId: number) => {
	const rootElement = document.getElementById('root');
	if (rootElement) {
		const root = createRoot( rootElement);
		root.render(<App viewId={viewId} />);
	}
};


export const onIndexShowHandler = (event: IndexEvent) => {
	renderBody(event.viewId);
};


/* Import { createRoot } from 'react-dom/client';

import App from '../components/App';

import { generateRoot } from '../helpers/utils';

let container: HTMLElement  | null = null;

export default function onIndexShowHandler() {

  // Client side navigation triggers this callback so
  // If container already exist, prevent createRoot from triggering.

  if (!container) {
    generateRoot();
    container = document.getElementById('app');
    const root = createRoot( container!);
    root.render(<App />);
  }
} */