import { createCSSFunction } from '../../Utils/createCSSFunction';

export const cssSummaryCard = createCSSFunction(({ theme }) => [
	{
		background: theme.bg.primary,
		padding: theme.spacing(10),
		borderRadius: theme.spacing(4),
		minHeight: theme.spacing(50),
		display: 'flex',
		flexDirection: 'column',
		gap: theme.spacing(2),
		justifyContent: 'space-between',
		position: 'relative',
	},
]);
