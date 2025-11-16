import styled from '@emotion/styled';
import { FC } from 'react';
import { IComponentBaseProps } from '../../types';
import { cssPage } from '../styles';
import { usePageStudy } from './hooks';
import { PageWarningMessage } from '../styled';
import { ThemeContent } from './styled';
import { Navbar } from '../../Containers/Navbar';
import { Button } from '../../Components/Button';
import { IconArrowLeft } from '../../Components/Icons';
import StudyThemeSlider from '../../Containers/StudyThemeSlider';

const PageStudyUnstyled: FC<IComponentBaseProps> = ({ className }) => {
	const { themeData, handleGoBack } = usePageStudy();

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
			<Navbar />
			{backButton}
			<ThemeContent>
				<StudyThemeSlider />
			</ThemeContent>
		</div>
	);
};

PageStudyUnstyled.displayName = 'PageStudyUnstyled';

const PageStudy = styled(PageStudyUnstyled)(cssPage);
export default PageStudy;
