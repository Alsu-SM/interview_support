import { createCSSFunction } from '../../Utils/createCSSFunction';

export const cssTagsInput = createCSSFunction(({ theme }) => [
	{
		display: 'flex',
		flexDirection: 'column',
		gap: theme.spacing(4),
	},
]);
