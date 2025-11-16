import styled from '@emotion/styled';
import { Button } from '../../Components/Button';
import { Tag } from '../../Components/Tag';
import { IHistoryResult } from '../../Store';
import { getTagStyle } from './utils';

export const ThemeTitle = styled('div')(({ theme }) => ({
	fontSize: theme.spacing(10),
}));
export const ThemeDescription = styled('div')(({ theme }) => ({
	fontSize: theme.spacing(8),
	color: theme.text.secondary,
}));

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

export const ThemeTitleGroup = styled('div')(({ theme }) => ({
	display: 'flex',
	gap: theme.spacing(4),
	justifyContent: 'space-between',
	alignItems: 'center',
	height: 'fit-content',
	width: '100%',
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

export const QuestionLabel = styled('div')(({ theme }) => ({
	fontSize: theme.spacing(8),
}));

export const QuestionTags = styled('div')(({ theme }) => ({
	display: 'flex',
	gap: theme.spacing(4),
	flexWrap: 'wrap',
}));

export const QuestionButtons = styled('div')(({ theme }) => ({
	display: 'flex',
	gap: theme.spacing(4),
	flexWrap: 'wrap',
}));

export const ToggleShownButton = styled(Button)(({ theme }) => ({
	minWidth: theme.spacing(90),
}));

export const QuestionStatistics = styled('div')(({ theme }) => ({
	fontSize: theme.spacing(6),
	color: theme.text.secondary,
}));

export const QuestionResultWrapper = styled('div')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	gap: theme.spacing(4),
}));

export const QuestionResult = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	gap: theme.spacing(4),
}));

export const QuestionResultLabel = styled('div')(({ theme }) => ({
	fontSize: theme.spacing(9),
}));

export const QuestionResultQuestionLabel = styled('div')(({ theme }) => ({
	fontSize: theme.spacing(8),
}));

export const QuestionResultTag = styled(Tag)<{ result: IHistoryResult | null }>(
	({ theme, result }) => ({
		pointerEvents: 'none',
		borderColor: getTagStyle(result, theme)?.text,
		color: getTagStyle(result, theme)?.text,
		background: getTagStyle(result, theme)?.bg,
	}),
);
