import styled from '@emotion/styled';
import { FC } from 'react';
import { ComponentPropsBase } from '../../types';
import { cssPage } from '../styles';
import { usePageTheme } from './hooks';
import { PageWarningMessage } from '../styled';
import { ThemeDescription, ThemeTitle, ThemeTitleGroup } from './styled';
import { ThemeQuestionsList } from '../../Containers/ThemeQuestionsList';

const PageThemeUnstyled: FC<ComponentPropsBase> = ({ className }) => {
	const { themeData } = usePageTheme();
	if (!themeData) {
		return (
			<div className={className}>
				<PageWarningMessage>No theme found</PageWarningMessage>
			</div>
		);
	}

	return (
		<div className={className}>
			<ThemeTitleGroup>
				<ThemeTitle>{themeData.name}</ThemeTitle>
				<ThemeDescription>{themeData.description}</ThemeDescription>
			</ThemeTitleGroup>
			<ThemeQuestionsList themeId={themeData.id} />
		</div>
	);
};

PageThemeUnstyled.displayName = 'PageThemeUnstyled';

const PageTheme = styled(PageThemeUnstyled)(cssPage);
export default PageTheme;
