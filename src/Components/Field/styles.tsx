import { createCSSFunction } from '../../Utils/createCSSFunction';

export const cssField = createCSSFunction(({ theme }) => [
	{
		display: 'flex',
		flexDirection: 'column',
		gap: theme.spacing(4),
	},
]);
