import { createCSSFunction } from '../../Utils/createCSSFunction';

export const cssGreetings = createCSSFunction(({ theme }) => ({
	fontSize: theme.spacing(8),
	color: theme.text.muted,
}));
