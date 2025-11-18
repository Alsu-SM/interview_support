import { createCSSFunction } from '../../Utils/createCSSFunction';
import { ITabsProps } from './types';

export const cssTabs = createCSSFunction<ITabsProps>(({ theme }) => [
	{
		display: 'flex',
		flexDirection: 'column',
		flex: 1,
		gap: theme.spacing(4),
	},
]);
