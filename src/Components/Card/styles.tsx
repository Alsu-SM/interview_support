import { createCSSFunction } from '../../Utils/createCSSFunction';

export const cssCard = createCSSFunction(({ theme }) => [
	{
		background: theme.bg.primary,
		padding: theme.spacing(10),
		fontSize: theme.spacing(8),
		border: 'none',
		margin: '0',
		opacity: 0.7,
		width: '100%',
		borderRadius: theme.spacing(10),
		height: theme.spacing(125),
		boxSizing: 'border-box',
		display: 'flex',
		transitionProperty: 'opacity',
		transitionDuration: theme.transition.duration.standard,
		transitionTimingFunction: theme.transition.timing.easeInOut,
		[`&:hover, &:active, &:focus-visible`]: {
			cursor: 'pointer',
			opacity: 1,
		},
		'&:focus-visible': {
			outline: `${theme.spacing(1)} solid ${theme.bg.accentDark}`,
			outlineOffset: theme.spacing(1),
		},
	},
]);
