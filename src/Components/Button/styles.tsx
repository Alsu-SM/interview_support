import { createCSSFunction } from '../../Utils/createCSSFunction';
import { IButtonProps } from './types';

export const cssButtonPlain = createCSSFunction(() => ({
	border: 'none',
}));

export const cssButtonPrimary = createCSSFunction(({ theme }) => ({
	borderColor: theme.bg.accentDark,
	background: theme.bg.accentDark,
	color: theme.text.primary,
	opacity: 0.9,
	[`&:hover, &:active`]: {
		background: theme.bg.accentDark,
		opacity: 1,
	},
}));
export const cssButtonDanger = createCSSFunction(({ theme }) => ({
	borderColor: theme.text.danger,
	color: theme.text.danger,
	opacity: 0.9,
	[`&:hover, &:active`]: {
		background: theme.bg.danger,
		opacity: 1,
	},
}));
export const cssButtonCommon = createCSSFunction(({ theme }) => ({
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
	gap: theme.spacing(4),
	fontSize: theme.spacing(8),
	transitionDuration: theme.transition.duration.standard,
	transitionTimingFunction: theme.transition.timing.easeInOut,
	[`&:hover, &:active`]: {
		background: theme.bg.inverse.secondary,
	},
	'&:focus-visible': {
		outline: `${theme.spacing(1)} solid ${theme.bg.accentDark}`,
		outlineOffset: theme.spacing(1),
	},
	['svg']: {
		width: theme.spacing(12),
		height: theme.spacing(12),
	},
}));
export const cssButton = createCSSFunction<IButtonProps>(
	({ danger, primary, plain, disabled }) => [
		cssButtonCommon,
		danger && cssButtonDanger,
		primary && cssButtonPrimary,
		plain && cssButtonPlain,
		disabled && {
			opacity: 0.4,
			pointerEvents: 'none',
		},
	],
);
