import styled from '@emotion/styled';
import { Button } from '../../Components/Button';

export const ThemeTitle = styled('div')(({ theme }) => ({
	fontSize: theme.spacing(10),
}));
export const ThemeDescription = styled('div')(({ theme }) => ({
	fontSize: theme.spacing(8),
	color: theme.text.secondary,
}));

export const ThemeContent = styled('div')(({ theme }) => ({
	display: 'flex',
	gap: theme.spacing(20),
	background: theme.bg.secondary,
	padding: theme.spacing(14),
	borderRadius: theme.spacing(10),
	boxShadow: theme.boxShadow.primary,
	backdropFilter: theme.filter.blur.primary,
	overflow: 'hidden',
}));

export const ThemeLeft = styled('div')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	gap: theme.spacing(20),
	width: theme.spacing(300),
}));

export const ThemeTitleGroup = styled('div')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	gap: theme.spacing(4),
}));

export const ThemeProgressRow = styled('div')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	gap: theme.spacing(4),
}));

export const ThemeProgressLabel = styled('div')(({ theme }) => ({
	color: theme.text.secondary,
	fontWeight: 200,
	fontSize: theme.spacing(6),
	textAlign: 'left',
}));

export const ThemeLabel = styled('div')(({ theme }) => ({
	fontSize: theme.spacing(8),
}));

export const ThemeTags = styled('div')(({ theme }) => ({
	display: 'flex',
	gap: theme.spacing(4),
	flexWrap: 'wrap',
}));

export const CreateQuestionButton = styled('button')(({ theme }) => [
	{
		background: theme.bg.primary,
		border: 'none',
		padding: theme.spacing(5),
		color: theme.text.primary,
		width: theme.spacing(25),
		height: theme.spacing(25),
		borderRadius: '50%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		boxSizing: 'border-box',
		cursor: 'pointer',
		opacity: 0.7,
		marginLeft: 'auto',
		marginTop: 'auto',
		marginRight: theme.spacing(2),
		marginBottom: theme.spacing(2),
		['&:hover']: {
			opacity: 1,
		},
		'&:focus-visible': {
			outline: `${theme.spacing(1)} solid ${theme.bg.accentDark}`,
			outlineOffset: theme.spacing(1),
		},
	},
]);

export const StudyThemeButton = styled(Button)([
	{
		width: '100%',
	},
]);
