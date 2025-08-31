import styled from '@emotion/styled';
import { FC } from 'react';
import { IComponentBaseProps } from '../../types';
import { cssPage } from '../styles';
import { usePageTheme } from './hooks';
import { PageWarningMessage } from '../styled';
import {
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
import { IconArrowLeft } from '../../Components/Icons';
import { Progress } from '../../Components/Progress/Progress';

const PageThemeUnstyled: FC<IComponentBaseProps> = ({ className }) => {
	const { themeData, progress, tags, handleGoBack } = usePageTheme();
	if (!themeData) {
		return (
			<div className={className}>
				<Navbar />
				<Button plain onClick={handleGoBack}>
					<IconArrowLeft /> Back to Dashboard
				</Button>
				<PageWarningMessage>No theme found</PageWarningMessage>
			</div>
		);
	}

	return (
		<div className={className}>
			<Navbar />
			<Button plain onClick={handleGoBack}>
				<IconArrowLeft /> Back to Dashboard
			</Button>
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
				</ThemeLeft>
				<ThemeQuestionsList themeId={themeData.id} />
			</ThemeContent>
		</div>
	);
};

PageThemeUnstyled.displayName = 'PageThemeUnstyled';

const PageTheme = styled(PageThemeUnstyled)(cssPage);
export default PageTheme;
