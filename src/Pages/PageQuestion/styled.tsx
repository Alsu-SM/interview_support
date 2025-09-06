import styled from '@emotion/styled';
import MDEditor from '@uiw/react-md-editor';

export const QuestionTitle = styled('div')(({ theme }) => ({
	fontSize: theme.spacing(10),
}));
export const QuestionDescription = styled('div')(({ theme }) => ({
	fontSize: theme.spacing(8),
	color: theme.text.tertiary,
}));
export const QuestionMDEditor = styled(MDEditor)(() => ({
	width: '100%',
	height: 'fit-content',
	border: 'none',
	boxShadow: 'none',
	background: 'transparent',
	['div.wmde-markdown']: {
		backgroundColor: 'transparent',
	},
	['div.w-md-editor-preview']: {
		padding: 0,
		border: 'none',
	},
}));

export const QuestionTitleGroup = styled('div')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	gap: theme.spacing(4),
}));

export const QuestionContent = styled('div')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	gap: theme.spacing(20),
	background: theme.bg.primary,
	padding: theme.spacing(14),
	borderRadius: theme.spacing(10),
	boxShadow: theme.boxShadow.primary,
	backdropFilter: theme.filter.blur.primary,
	overflow: 'hidden',
	flex: 1,
}));

export const QuestionTags = styled('div')(({ theme }) => ({
	display: 'flex',
	gap: theme.spacing(4),
	flexWrap: 'wrap',
}));

export const QuestionLabel = styled('div')(({ theme }) => ({
	fontSize: theme.spacing(8),
}));

export const QuestionButtons = styled('div')(() => ({
	display: 'flex',
	justifyContent: 'space-between',
}));
