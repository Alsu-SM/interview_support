import { FC } from 'react';
import { IQuestionCardProps } from './types';
import styled from '@emotion/styled';
import {
	QuestionCardButtonsWrapper,
	QuestionCardLabel,
	QuestionCardRow,
	QuestionCardValue,
	QuestionTagsList,
} from './styled';
import { useQuestionCard } from './hooks';
import { Card } from '../Card';
import { cssQuestionCard } from './styles';
import ButtonIcon from '../ButtonIcon/ButtonIcon';
import { IconDelete, IconEdit } from '../Icons';
import { Tag } from '../Tag';
import { IHistoryResult } from '../../Store';

const QuestionCardUnstyled: FC<IQuestionCardProps> = ({
	id,
	question,
	className,
}) => {
	const { tags, questionData, handleClick, handleEdit, handleDelete } =
		useQuestionCard({
			question,
		});

	return (
		<Card className={className} onClick={handleClick} id={id} key={id}>
			<QuestionCardButtonsWrapper>
				<ButtonIcon icon={<IconEdit />} onClick={handleEdit} />
				<ButtonIcon icon={<IconDelete />} danger onClick={handleDelete} />
			</QuestionCardButtonsWrapper>
			<QuestionCardRow>
				<QuestionCardLabel>Question:</QuestionCardLabel>
				<QuestionCardValue title={question.question}>
					{question.question}
				</QuestionCardValue>
			</QuestionCardRow>
			<QuestionCardRow>
				<QuestionCardLabel>Tags:</QuestionCardLabel>
				<QuestionCardValue>
					{tags.length ? <QuestionTagsList>{tags}</QuestionTagsList> : '-'}
				</QuestionCardValue>
			</QuestionCardRow>
			{questionData && (
				<QuestionCardRow>
					<Tag
						label={`${questionData.progress}%`}
						success={questionData.result === IHistoryResult.Easy}
						warning={questionData.result === IHistoryResult.Medium}
						danger={questionData.result === IHistoryResult.Hard}
					/>
				</QuestionCardRow>
			)}
		</Card>
	);
};
QuestionCardUnstyled.displayName = 'QuestionCardUnstyled';

export const QuestionCard = styled(QuestionCardUnstyled)(cssQuestionCard);
