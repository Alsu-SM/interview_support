import { FC } from 'react';
import { IQuestionCardProps } from './types';
import styled from '@emotion/styled';
import { cssQuestionCard } from './styles';
import {
	QuestionCardLabel,
	QuestionCardMessage,
	QuestionCardRow,
	QuestionCardValue,
} from './styled';
import { useQuestionCard } from './hooks';

const QuestionCardUnstyled: FC<IQuestionCardProps> = ({
	id,
	question,
	className,
}) => {
	const { tags, tagsMessage, handleClick } = useQuestionCard({ question });

	return (
		<button
			type="button"
			className={className}
			onClick={handleClick}
			id={id}
			key={id}
		>
			<QuestionCardRow>
				<QuestionCardLabel>Question:</QuestionCardLabel>
				<QuestionCardValue title={question.question}>
					{question.question}
				</QuestionCardValue>
			</QuestionCardRow>
			<QuestionCardRow>
				<QuestionCardLabel>Tags:</QuestionCardLabel>
				<QuestionCardValue>
					{tags} {tagsMessage}
				</QuestionCardValue>
			</QuestionCardRow>
			<QuestionCardMessage>{'Go to question ->'}</QuestionCardMessage>
		</button>
	);
};
QuestionCardUnstyled.displayName = 'QuestionCardUnstyled';

export const QuestionCard = styled(QuestionCardUnstyled)(cssQuestionCard);
