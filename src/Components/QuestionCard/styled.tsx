import styled from '@emotion/styled';
import { createCSSFunction } from '../../Utils/createCSSFunction';

export const cssQuestionCardLabel = createCSSFunction(({ theme }) => ({
	color: theme.text.secondary,
	fontWeight: 200,
}));

export const cssQuestionCardValue = createCSSFunction(({ theme }) => ({
	color: theme.text.primary,
	fontWeight: 700,
	textAlign: 'right',
	whiteSpace: 'nowrap',
	overflow: 'hidden',
	textOverflow: 'ellipsis',
	boxSizing: 'border-box',
}));

export const cssQuestionCardRow = createCSSFunction(({ theme }) => ({
	display: 'flex',
	gap: theme.spacing(3),
	textAlign: 'left',
	alignItems: 'center',
}));

export const cssQuestionTag = createCSSFunction(({ theme }) => ({
	fontSize: theme.spacing(6),
	color: theme.text.secondary,
	background: theme.bg.inverse.primary,
	padding: theme.spacing(2, 3),
	borderRadius: theme.spacing(12),
}));

export const cssQuestionTagsList = createCSSFunction(({ theme }) => ({
	display: 'flex',
	gap: theme.spacing(4),
}));

export const cssQuestionCardButtonsWrapper = createCSSFunction(({ theme }) => ({
	position: 'absolute',
	right: theme.spacing(2),
	top: theme.spacing(2),
	display: 'flex',
	alignItems: 'center',
	gap: theme.spacing(2),
	opacity: 0,
	transitionDuration: theme.transition.duration.standard,
	transitionTimingFunction: theme.transition.timing.easeInOut,
}));

export const QuestionCardLabel = styled('div')(cssQuestionCardLabel);
export const QuestionCardValue = styled('div')(cssQuestionCardValue);
export const QuestionCardRow = styled('div')(cssQuestionCardRow);
export const QuestionTag = styled('div')(cssQuestionTag);
export const QuestionTagsList = styled('div')(cssQuestionTagsList);
export const QuestionCardButtonsWrapper = styled('div')(
	cssQuestionCardButtonsWrapper,
);
