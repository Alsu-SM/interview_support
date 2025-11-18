import styled from '@emotion/styled';
import { FC } from 'react';
import { IComponentBaseProps } from '../../types';
import { cssPage } from '../styles';
import { usePageTheme } from './hooks';
import { PageWarningMessage } from '../styled';
import {
	CreateQuestionButton,
	StudyThemeButton,
	ThemeContent,
	ThemeDescription,
	ThemeLabel,
	ThemeLeft,
	ThemeProgressLabel,
	ThemeProgressRow,
	ThemeTags,
	ThemeTitle,
	ThemeTitleGroup,
} from './styled';
import { ThemeQuestionsList } from '../../Containers/ThemeQuestionsList';
import { Navbar } from '../../Containers/Navbar';
import { Button } from '../../Components/Button';
import { IconArrowLeft, IconPlus } from '../../Components/Icons';
import { Progress } from '../../Components/Progress/Progress';
import { ThemeMaterialsList } from '../../Containers/ThemeMaterialsList';
import { Tabs } from '../../Components/Tabs';
import { IThemePageTabValue } from './types';

const PageThemeUnstyled: FC<IComponentBaseProps> = ({ className }) => {
	const {
		themeData,
		progress,
		tags,
		tabValue,
		handleTabChange,
		handleStudy,
		handleGoBack,
		handleCreateQuestion,
	} = usePageTheme();

	const backButton = (
		<Button plain onClick={handleGoBack}>
			<IconArrowLeft /> Back to Dashboard
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
			<Navbar />
			{backButton}
			<ThemeContent>
				<ThemeLeft>
					<ThemeTitleGroup>
						<ThemeTitle>{themeData.name}</ThemeTitle>
						<ThemeDescription>{themeData.description}</ThemeDescription>
					</ThemeTitleGroup>
					<ThemeTags>
						<ThemeLabel>Tags:</ThemeLabel>
						{tags.length > 0 ? tags : '-'}
					</ThemeTags>
					<ThemeProgressRow>
						<Progress value={progress} />
						<ThemeProgressLabel>{`${progress}% completed`}</ThemeProgressLabel>
					</ThemeProgressRow>
					{themeData.questions.length > 0 ? (
						<StudyThemeButton primary onClick={handleStudy}>
							Study Theme
						</StudyThemeButton>
					) : null}
				</ThemeLeft>
				<Tabs
					onChange={handleTabChange}
					selectedId={tabValue}
					items={[
						{
							id: IThemePageTabValue.Question,
							label: 'Questions',
							content: <ThemeQuestionsList themeId={themeData.id} />,
						},
						{
							id: IThemePageTabValue.Material,
							label: 'Materials',
							content: <ThemeMaterialsList themeId={themeData.id} />,
						},
					]}
				/>
			</ThemeContent>
			<CreateQuestionButton onClick={handleCreateQuestion}>
				<IconPlus />
			</CreateQuestionButton>
		</div>
	);
};

PageThemeUnstyled.displayName = 'PageThemeUnstyled';

const PageTheme = styled(PageThemeUnstyled)(cssPage);
export default PageTheme;
