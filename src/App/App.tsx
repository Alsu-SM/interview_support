import { Outlet } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { getAppTheme } from '../Store';
import { ThemeProvider } from '@emotion/react';
import { ComponentPropsBase } from '../types';

function App({ className }: ComponentPropsBase) {
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
