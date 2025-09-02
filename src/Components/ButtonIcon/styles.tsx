import { createCSSFunction } from '../../Utils/createCSSFunction';
import { IButtonIconProps } from './types';

export const cssButtonIcon = createCSSFunction<IButtonIconProps>(
	({ theme, danger }) => ({
		width: theme.spacing(16),
		height: theme.spacing(16),
		borderRadius: theme.spacing(2),
		background: 'transparent',
		border: 'none',
		margin: 0,
		padding: theme.spacing(3),
		boxSizing: 'border-box',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		cursor: 'pointer',
		transitionDuration: theme.transition.duration.standard,
		transitionTimingFunction: theme.transition.timing.easeInOut,
		['svg path']: {
			stroke: theme.text.secondary,
		},
		[`&:hover, &:active`]: {
			background: theme.bg.inverse.secondary,
			['svg path']: {
				stroke: danger ? theme.text.danger : theme.text.primary,
			},
		},
	}),
);
