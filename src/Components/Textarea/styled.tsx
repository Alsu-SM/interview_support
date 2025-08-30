import styled from '@emotion/styled';
import { IconResize } from '../Icons';
export const TextareaIconResize = styled(IconResize)(({ theme }) => ({
	position: 'absolute',
	bottom: theme.spacing(1),
	right: theme.spacing(1),
	width: theme.spacing(8),
	height: theme.spacing(8),
	'& path': {
		fill: theme.text.tertiary,
		stroke: 'transparent',
	},
}));
export const TextareaElement = styled('textarea')(({ theme }) => ({
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
	zIndex: 1,
	'&::placeholder': {
		color: theme.text.tertiary,
	},
	[`&:hover, &:active, &:focus`]: {
		opacity: 1,
	},
	[`&::-webkit-scrollbar, &::-webkit-resizer`]: {
		display: 'none',
	},
}));
