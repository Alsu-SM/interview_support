import { createCSSFunction } from '../../Utils/createCSSFunction';
import { IInputProps } from './types';

export const cssInput = createCSSFunction<IInputProps>(({ theme }) => [
	{
		width: '100%',
		borderRadius: theme.spacing(3),
		color: theme.text.primary,
		background: theme.bg.primary,
		border: `${theme.spacing(0.5)} solid ${theme.text.tertiary}`,
		margin: 0,
		padding: theme.spacing(5, 6),
		boxSizing: 'border-box',
		transitionDuration: theme.transition.duration.standard,
		transitionTimingFunction: theme.transition.timing.easeInOut,
		opacity: 0.7,
		outline: 'none',
		'&::placeholder': {
			color: theme.text.tertiary,
		},
		[`&:hover, &:active, &:focus`]: {
			opacity: 1,
		},
	},
]);
