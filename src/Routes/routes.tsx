import PageHome from '../Pages/PageHome';
import PageQuestion from '../Pages/PageQuestion';
import PageSettings from '../Pages/PageSettings';
import PageStatistics from '../Pages/PageStatistics';
import PageTheme from '../Pages/PageTheme';
import { RouteItem, RoutePath } from './types';

const routes: RouteItem[] = [
	{
		path: '/interview_support/',
		index: true,
		displayName: 'Dashboard',
		key: RoutePath.Home,
		element: <PageHome />,
	},
	{
		path: '/interview_support/theme/:id',
		displayName: 'Theme',
		key: RoutePath.Theme,
		element: <PageTheme />,
		hidden: true,
	},
	{
		path: '/interview_support/question/:id',
		displayName: 'Question',
		key: RoutePath.Question,
		element: <PageQuestion />,
		hidden: true,
	},
	{
		path: '/interview_support/statistics',
		displayName: 'Statistics',
		key: RoutePath.Statistics,
		element: <PageStatistics />,
		hidden: true,
	},
	{
		path: '/interview_support/settings',
		displayName: 'Settings',
		key: RoutePath.Settings,
		element: <PageSettings />,
		hidden: true,
	},
];

export default routes;
