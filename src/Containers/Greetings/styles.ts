import { createCSSFunction } from '../../Utils/createCSSFunction';

export const cssGreetings = createCSSFunction(({ theme }) => ({
	fontSize: theme.spacing(9),
	color: theme.text.secondary,
	marginLeft: 'auto',
}));
