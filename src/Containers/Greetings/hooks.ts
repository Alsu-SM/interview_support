import { useSelector } from 'react-redux';
import { getAppThemeGreetings } from '../../Store';

export const useGreetings = () => {
	const greetings = useSelector(getAppThemeGreetings);

	return { greetings };
};
