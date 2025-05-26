import PageHome from '../Pages/PageHome';
import PageQuestion from '../Pages/PageQuestion';
import PageTheme from '../Pages/PageTheme';
import { RouteItem, RoutePath } from './types';

const routes: RouteItem[] = [
	{
		path: '/interview_support',
		index: true,
		displayName: 'home',
		key: RoutePath.Home,
		element: <PageHome />,
	},
	{
		path: '/interview_support/theme/:id',
		displayName: 'theme',
		key: RoutePath.Theme,
		element: <PageTheme />,
	},
	{
		path: '/interview_support/question/:id',
		displayName: 'theme',
		key: RoutePath.Question,
		element: <PageQuestion />,
	},
];

export default routes;
