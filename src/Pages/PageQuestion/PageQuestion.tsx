import styled from '@emotion/styled';
import { FC } from 'react';
import { IComponentBaseProps } from '../../types';
import { cssPage } from '../styles';
import { usePageQuestion } from './hooks';
import { PageWarningMessage } from '../styled';
import {
	QuestionDescription,
	QuestionTitle,
	QuestionTitleGroup,
} from './styled';

const PageQuestionUnstyled: FC<IComponentBaseProps> = ({ className }) => {
	const { question } = usePageQuestion();
	if (!question) {
		return (
			<div className={className}>
				<PageWarningMessage>No question found</PageWarningMessage>
			</div>
		);
	}

	return (
		<div className={className}>
			<QuestionTitleGroup>
				<QuestionTitle>{question.question}</QuestionTitle>
				<QuestionDescription>{question.answer}</QuestionDescription>
			</QuestionTitleGroup>
		</div>
	);
};

PageQuestionUnstyled.displayName = 'PageQuestionUnstyled';

const PageQuestion = styled(PageQuestionUnstyled)(cssPage);
export default PageQuestion;
