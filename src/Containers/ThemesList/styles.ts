import { createCSSFunction } from '../../Utils/createCSSFunction';

export const cssThemesList = createCSSFunction(({ theme }) => [
	{
		flex: 1,
		display: 'flex',
		flexDirection: 'column',
		overflow: 'hidden',
		gap: theme.spacing(10),
	},
]);
