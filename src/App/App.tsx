import { Outlet } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { getAppTheme } from '../Store';
import { ThemeProvider } from '@emotion/react';
import { IComponentBaseProps } from '../types';

function App({ className }: IComponentBaseProps) {
	const theme = useSelector(getAppTheme);

	return (
		<ThemeProvider theme={theme}>
			<div className={className}>
				<Outlet />
			</div>
		</ThemeProvider>
	);
}

export default App;
