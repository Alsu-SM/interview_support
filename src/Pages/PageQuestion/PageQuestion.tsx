import styled from '@emotion/styled';
import { FC } from 'react';
import { IComponentBaseProps } from '../../types';
import { cssPage } from '../styles';
import { usePageQuestion } from './hooks';
import { PageWarningMessage } from '../styled';
import {
	QuestionContent,
	QuestionLabel,
	QuestionMDEditor,
	QuestionTags,
	QuestionTitle,
	QuestionTitleGroup,
} from './styled';
import { Button } from '../../Components/Button';
import { IconArrowLeft } from '../../Components/Icons';
import { Navbar } from '../../Containers/Navbar';

const PageQuestionUnstyled: FC<IComponentBaseProps> = ({ className }) => {
	const { question, goBackTitle, tags, handleGoBack } = usePageQuestion();

	const backButton = (
		<Button plain onClick={handleGoBack}>
			<IconArrowLeft /> {goBackTitle}
		</Button>
	);

	if (!question) {
		return (
			<div className={className}>
				<Navbar />
				{backButton}
				<PageWarningMessage>No question found</PageWarningMessage>
			</div>
		);
	}

	return (
		<div className={className}>
			<Navbar />
			{backButton}
			<QuestionContent>
				<QuestionTitleGroup>
					<QuestionTitle>{question.question}</QuestionTitle>
					<QuestionTags>
						<QuestionLabel>Tags:</QuestionLabel>
						{tags.length > 0 ? tags : '-'}
					</QuestionTags>
				</QuestionTitleGroup>
				<QuestionMDEditor
					value={question.answer}
					height="100%"
					visibleDragbar={false}
					preview="preview"
					hideToolbar
				/>
			</QuestionContent>
		</div>
	);
};

PageQuestionUnstyled.displayName = 'PageQuestionUnstyled';

const PageQuestion = styled(PageQuestionUnstyled)(cssPage);
export default PageQuestion;
