import styled from '@emotion/styled';
import { FC } from 'react';
import { IComponentBaseProps } from '../../types';
import { usePageStudy } from './hooks';
import {
	QuestionButtons,
	QuestionLabel,
	QuestionResultLabel,
	QuestionResultWrapper,
	QuestionStatistics,
	QuestionTags,
	ThemeDescription,
	ThemeProgressLabel,
	ThemeProgressRow,
	ThemeQuestionContent,
	ThemeTitle,
	ThemeTitleGroup,
	ToggleShownButton,
} from './styled';
import { Navbar } from '../Navbar';
import { Button } from '../../Components/Button';
import {
	IconArrowLeft,
	IconEyeClosed,
	IconEyeOpen,
} from '../../Components/Icons';
import { Progress } from '../../Components/Progress/Progress';
import { IHistoryResult } from '../../Store';
import { QuestionMDEditor } from '../../Pages/PageQuestion/styled';
import { PageWarningMessage } from '../../Pages/styled';
import { cssStudyThemeSlider } from './styles';

const StudyThemeSliderUnstyled: FC<IComponentBaseProps> = ({ className }) => {
	const {
		themeData,
		currentQuestion,
		questionsCount,
		progress,
		tags,
		statistics,
		shown,
		isDone,
		themeReview,
		handleGoBack,
		handleAnswer,
		handleShownToggle,
		handleRepeat,
	} = usePageStudy();

	const backButton = (
		<Button plain onClick={handleGoBack}>
			<IconArrowLeft /> Back to Theme
		</Button>
	);

	if (!themeData) {
		return (
			<div className={className}>
				<Navbar />
				{backButton}
				<PageWarningMessage>No theme found</PageWarningMessage>
			</div>
		);
	}

	return (
		<div className={className}>
			<ThemeTitleGroup>
				<ThemeTitle>{themeData.name}</ThemeTitle>
				<ThemeDescription>{questionsCount}</ThemeDescription>
			</ThemeTitleGroup>
			<ThemeProgressRow>
				<Progress value={progress} />
				<ThemeProgressLabel>{`${progress}% completed`}</ThemeProgressLabel>
			</ThemeProgressRow>
			<ThemeQuestionContent>
				<QuestionLabel>{currentQuestion?.question}</QuestionLabel>
				{tags.length > 0 ? <QuestionTags>{tags}</QuestionTags> : null}
				{!isDone && (
					<ToggleShownButton primary onClick={handleShownToggle}>
						{shown ? <IconEyeClosed /> : <IconEyeOpen />}{' '}
						{`${shown ? 'Hide Answer' : 'Show Answer'}`}
					</ToggleShownButton>
				)}
				{shown && !isDone ? (
					<>
						<QuestionMDEditor
							value={currentQuestion?.answer}
							height="fit-content"
							visibleDragbar={false}
							preview="preview"
							hideToolbar
						/>
						<QuestionButtons>
							<Button
								danger
								onClick={() => {
									handleAnswer(IHistoryResult.Hard);
								}}
							>
								Very Hard
							</Button>
							<Button
								warning
								onClick={() => {
									handleAnswer(IHistoryResult.Medium);
								}}
							>
								Not Sure
							</Button>
							<Button
								success
								onClick={() => {
									handleAnswer(IHistoryResult.Easy);
								}}
							>
								Very Easy
							</Button>
						</QuestionButtons>
					</>
				) : null}
				{!isDone && <QuestionStatistics>{statistics}</QuestionStatistics>}
				{isDone && (
					<>
						<QuestionResultLabel>Круг завершен</QuestionResultLabel>
						<QuestionResultWrapper>{themeReview}</QuestionResultWrapper>
						<QuestionButtons>
							<Button onClick={handleGoBack}>Вернуться к теме</Button>
							<Button primary onClick={handleRepeat}>
								Повторить
							</Button>
						</QuestionButtons>
					</>
				)}
			</ThemeQuestionContent>
		</div>
	);
};

StudyThemeSliderUnstyled.displayName = 'StudyThemeSliderUnstyled';

const StudyThemeSlider = styled(StudyThemeSliderUnstyled)(cssStudyThemeSlider);
export default StudyThemeSlider;
