import styled from '@emotion/styled';

export const ThemeTitle = styled('div')(({ theme }) => ({
	fontSize: theme.spacing(10),
}));
export const ThemeDescription = styled('div')(({ theme }) => ({
	fontSize: theme.spacing(8),
	color: theme.text.soft,
}));

export const ThemeTitleGroup = styled('div')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	gap: theme.spacing(4),
}));
