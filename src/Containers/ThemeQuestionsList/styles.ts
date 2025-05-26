import { createCSSFunction } from '../../Utils/createCSSFunction';
import { cssScrollbar } from '../../Utils/scrollbar';

export const cssQuestionsList = createCSSFunction(({ theme }) => [
	{
		display: 'grid',
		gap: theme.spacing(4),
		maxHeight: theme.spacing(113),
		overflow: 'hidden auto',
		gridTemplateColumns: `repeat(auto-fit, minmax(350px, 1fr))`,
	},
	cssScrollbar,
]);
