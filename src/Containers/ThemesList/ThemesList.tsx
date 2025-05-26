import { FC } from 'react';
import styled from '@emotion/styled';
import { ComponentPropsBase } from '../../types';
import { useThemesList } from './hooks';
import { cssThemesList } from './styles';
import { PageWarningMessage } from '../../Pages/styled';
import { CreateThemeButton, ThemesListOrderedListWrapper } from './styled';
import OrderedList from '../../Components/OrderedList';

const ThemesListUnstyled: FC<ComponentPropsBase> = ({ className }) => {
	const { themesList, handleReorder, handleCreateTheme } = useThemesList();

	return (
		<div className={className}>
			{themesList.length > 0 ? (
				<ThemesListOrderedListWrapper>
					<OrderedList items={themesList} onReorder={handleReorder} />
				</ThemesListOrderedListWrapper>
			) : (
				<PageWarningMessage>
					No themes yet, wanna create one?
				</PageWarningMessage>
			)}
			<CreateThemeButton onClick={handleCreateTheme}>
				Create new theme
			</CreateThemeButton>
		</div>
	);
};

export const ThemesList = styled(ThemesListUnstyled)(cssThemesList);
