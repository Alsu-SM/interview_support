import styled from '@emotion/styled';
import { createCSSFunction } from '../../Utils/createCSSFunction';

export const cssQuestionCardLabel = createCSSFunction(({ theme }) => ({
	color: theme.text.soft,
	fontWeight: 400,
	width: theme.spacing(22),
}));

export const cssQuestionCardValue = createCSSFunction(({ theme }) => ({
	color: theme.text.base,
	fontWeight: 700,
	textAlign: 'right',
	whiteSpace: 'nowrap',
	overflow: 'hidden',
	textOverflow: 'ellipsis',
	boxSizing: 'border-box',
	display: 'flex',
	gap: theme.spacing(3),
	alignItems: 'center',
}));

export const cssQuestionCardRow = createCSSFunction(({ theme }) => ({
	display: 'flex',
	gap: theme.spacing(3),
	alignItems: 'center',
}));

export const cssQuestionCardMessage = createCSSFunction(({ theme }) => ({
	fontSize: theme.spacing(5),
	color: theme.text.base,
	fontWeight: 700,
	display: 'none',
	margin: 'auto',
}));

export const cssQuestionTag = createCSSFunction(({ theme }) => ({
	fontSize: theme.spacing(3),
	color: theme.text.soft,
	background: theme.bg.contrast,
	padding: theme.spacing(2, 3),
	borderRadius: theme.spacing(12),
}));

export const QuestionCardLabel = styled('div')(cssQuestionCardLabel);
export const QuestionCardValue = styled('div')(cssQuestionCardValue);
export const QuestionCardRow = styled('div')(cssQuestionCardRow);
export const QuestionCardMessage = styled('div')(cssQuestionCardMessage);
export const QuestionTag = styled('div')(cssQuestionTag);
