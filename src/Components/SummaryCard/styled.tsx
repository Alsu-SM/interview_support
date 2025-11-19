import styled from '@emotion/styled';

export const SummaryCardTitle = styled('div')(({ theme }) => ({
	fontSize: theme.spacing(9),
}));
export const SummaryCardValue = styled('div')(({ theme }) => ({
	fontSize: theme.spacing(30),
	fontWeight: 'bold',
	color: theme.text.secondary,
}));
export const SummaryCardSubtitle = styled('div')({});
export const SummaryCardIconWrapper = styled('div')(({ theme }) => ({
	position: 'absolute',
	right: '0',
	top: '0',
	display: 'flex',
	width: '40%',
	height: '100%',
	'> svg': {
		width: '100%',
		height: '100%',
		opacity: '0.2',
		'> path': {
			stroke: theme.bg.accent,
		},
	},
}));
