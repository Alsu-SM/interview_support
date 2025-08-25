import { createCSSFunction } from '../../Utils/createCSSFunction';
import { IButtonProps } from './types';

export const cssButtonIcon = createCSSFunction<IButtonProps>(
	({ theme, danger, primary }) => [
		{
			width: 'fit-content',
			borderRadius: theme.spacing(2),
			color: theme.text.primary,
			background: 'transparent',
			border: `${theme.spacing(0.5)} solid ${theme.bg.inverse.secondary}`,
			margin: 0,
			padding: theme.spacing(4, 8),
			boxSizing: 'border-box',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			cursor: 'pointer',
			transitionDuration: theme.transition.duration.standard,
			transitionTimingFunction: theme.transition.timing.easeInOut,
			[`&:hover, &:active`]: {
				background: theme.bg.inverse.secondary,
			},
		},
		danger && {
			borderColor: theme.text.danger,
			color: theme.text.danger,
			opacity: 0.9,
			[`&:hover, &:active`]: {
				background: 'transparent',
				opacity: 1,
			},
		},
		primary && {
			borderColor: theme.bg.accentDark,
			background: theme.bg.accentDark,
			color: theme.text.primary,
			opacity: 0.9,
			[`&:hover, &:active`]: {
				background: theme.bg.accentDark,
				opacity: 1,
			},
		},
	],
);
