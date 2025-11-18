import styled from '@emotion/styled';

export const TabsList = styled('div')(({ theme }) => ({
	background: theme.bg.primary,
	padding: theme.spacing(8, 6),
	display: 'flex',
	justifyContent: 'stretch',
	borderRadius: theme.spacing(4),
}));

export const TabsItem = styled('button')<{ selected: boolean }>(
	({ theme, selected }) => ({
		flex: 1,
		display: 'flex',
		justifyContent: 'center',
		background: theme.bg.primary,
		padding: theme.spacing(6, 4),
		opacity: selected ? 0.8 : 0.6,
		border: 'none',
		color: theme.text.primary,
		fontSize: theme.spacing(8),
		cursor: 'pointer',
		transitionDuration: theme.transition.duration.standard,
		transitionTimingFunction: theme.transition.timing.easeInOut,
		'&:hover': {
			opacity: 1,
		},
	}),
);

export const TabsContent = styled('div')();
