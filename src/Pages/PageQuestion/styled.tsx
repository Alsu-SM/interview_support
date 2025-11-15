import styled from '@emotion/styled';
import MDEditor from '@uiw/react-md-editor';
import { cssScrollbar } from '../../Utils/scrollbar';

export const QuestionTitle = styled('div')(({ theme }) => ({
	fontSize: theme.spacing(10),
}));
export const QuestionDescription = styled('div')(({ theme }) => ({
	fontSize: theme.spacing(8),
	color: theme.text.tertiary,
}));
export const QuestionMDEditor = styled(MDEditor)(({ theme }) => [
	{
		width: '100%',
		height: 'fit-content',
		border: 'none',
		boxShadow: 'none',
		overflow: 'hidden',
		padding: theme.spacing(20),
		borderRadius: theme.spacing(6),
		boxSizing: 'border-box',
		background: theme.bg.primary,
		['div.wmde-markdown']: {
			backgroundColor: 'transparent',
		},
		['div.w-md-editor-content']: [
			{
				height: 'fit-content',
			},
			cssScrollbar({ theme, inverse: true }),
		],
		['div.w-md-editor-preview']: [
			{
				padding: 0,
				border: 'none',
				position: 'relative',
			},
		],
	},
]);

export const QuestionTitleGroup = styled('div')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	gap: theme.spacing(4),
	minWidth: theme.spacing(300),
	boxSizing: 'border-box',
}));

export const QuestionButtonsGroup = styled('div')(({ theme }) => ({
	display: 'flex',
	gap: theme.spacing(4),
	zIndex: '1',
	marginTop: 'auto',
	marginLeft: 'auto',
}));

export const QuestionContent = styled('div')(({ theme }) => ({
	display: 'flex',
	gap: theme.spacing(20),
	background: theme.bg.primary,
	padding: theme.spacing(14),
	borderRadius: theme.spacing(10),
	boxShadow: theme.boxShadow.primary,
	backdropFilter: theme.filter.blur.primary,
	overflow: 'hidden',
	flexDirection: 'column',
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
