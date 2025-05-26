import { createBrowserRouter as createRouter } from 'react-router-dom';
import App from '../App';
import loader from '../App/loader.router';
import routes from './routes';
import PageError from '../Pages/PageError';

const router = createRouter([
	{
		path: '/',
		element: <App />,
		loader,
		errorElement: <PageError />,
		children: routes,
	},
]);

export default router;
