import {type ReactNode} from 'react';
import './Message.css';

export const Message = ({
	children,
	isSuccess,
}: {
	children: ReactNode;
	isSuccess?: boolean;
}) => (
	<div className={`react-message ${isSuccess ? 'success' : 'error'}`}>
		{children}
	</div>
);