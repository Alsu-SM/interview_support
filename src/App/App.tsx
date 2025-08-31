import { Outlet } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { getAppTheme } from '../Store';
import { ThemeProvider } from '@emotion/react';
import { IComponentBaseProps } from '../types';
import { DeleteModal } from '../Containers/DeleteModal';
import { CreateEditThemeModal } from '../Containers/CreateEditThemeModal';
import { CreateEditQuestionModal } from '../Containers/CreateEditQuestionModal';

function App({ className }: IComponentBaseProps) {
	const theme = useSelector(getAppTheme);

	return (
		<ThemeProvider theme={theme}>
			<div className={className}>
				<Outlet />
				<DeleteModal />
				<CreateEditThemeModal />
				<CreateEditQuestionModal />
			</div>
		</ThemeProvider>
	);
}

export default App;
