import styled from '@emotion/styled';

export const ThemeContent = styled('div')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	gap: theme.spacing(20),
	background: theme.bg.secondary,
	padding: theme.spacing(14),
	borderRadius: theme.spacing(10),
	boxShadow: theme.boxShadow.primary,
	backdropFilter: theme.filter.blur.primary,
	overflow: 'hidden',
	flex: 1,
}));

export const ThemeQuestionContent = styled(ThemeContent)(({ theme }) => ({
	height: 'fit-content',
	flex: 'unset',
	alignItems: 'center',
	gap: theme.spacing(10),
}));
