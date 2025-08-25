import { createCSSFunction } from '../../Utils/createCSSFunction';
import { ITextareaProps } from './types';

export const cssTextarea = createCSSFunction<ITextareaProps>(({ theme }) => [
	{
		width: '100%',
		borderRadius: theme.spacing(3),
		color: theme.text.primary,
		background: theme.bg.primary,
		border: `${theme.spacing(0.5)} solid ${theme.text.tertiary}`,
		margin: 0,
		padding: theme.spacing(5, 6),
		boxSizing: 'border-box',
		transitionProperty: 'opacity',
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
		[`&::-webkit-scrollbar, &::-webkit-scrollbar-track, &::-webkit-scrollbar-thumb, &::-webkit-scrollbar-corner`]:
			{
				background: 'transparent',
				border: 'none',
			},
	},
]);
