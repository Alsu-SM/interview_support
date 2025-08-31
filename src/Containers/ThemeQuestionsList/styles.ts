import { createCSSFunction } from '../../Utils/createCSSFunction';
import { cssScrollbar } from '../../Utils/scrollbar';

export const cssQuestionsList = createCSSFunction(({ theme }) => [
	{
		display: 'flex',
		flexDirection: 'column',
		gap: theme.spacing(4),
		maxHeight: '100%',
		overflow: 'hidden auto',
		gridTemplateColumns: `repeat(auto-fit, minmax(350px, 1fr))`,
		flex: 1,
		minWidth: theme.spacing(250),
	},
	cssScrollbar,
]);
