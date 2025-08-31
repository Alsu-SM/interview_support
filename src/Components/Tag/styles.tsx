import { createCSSFunction } from '../../Utils/createCSSFunction';

export const cssTag = createCSSFunction(({ theme }) => [
	{
		fontSize: theme.spacing(6),
		color: theme.text.secondary,
		background: theme.bg.inverse.secondary,
		padding: theme.spacing(2, 3),
		borderRadius: theme.spacing(12),
		transitionDuration: theme.transition.duration.standard,
		transitionTimingFunction: theme.transition.timing.easeInOut,
		cursor: 'pointer',
		[`&:hover, &:focus`]: {
			background: theme.bg.inverse.primary,
		},
	},
]);
