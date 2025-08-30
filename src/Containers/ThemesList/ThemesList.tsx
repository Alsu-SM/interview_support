import { FC } from 'react';
import styled from '@emotion/styled';
import { IComponentBaseProps } from '../../types';
import { useThemesList } from './hooks';
import { cssThemesList } from './styles';
import { PageWarningMessage } from '../../Pages/styled';
import {
	CreateThemeButton,
	CreateThemeButtonInline,
	ThemesListOrderedListWrapper,
} from './styled';
import OrderedList from '../../Components/OrderedList';
import { IconPlus } from '../../Components/Icons';
import { CreateThemeModal } from '../CreateThemeModal';
import { DeleteModal } from '../DeleteModal';

const ThemesListUnstyled: FC<IComponentBaseProps> = ({ className }) => {
	const { themesList, handleReorder, handleCreateTheme } = useThemesList();

	return (
		<div className={className}>
			<ThemesListOrderedListWrapper>
				{themesList.length > 0 ? (
					<OrderedList items={themesList} onReorder={handleReorder} />
				) : (
					<PageWarningMessage>
						No themes yet,{' '}
						<CreateThemeButtonInline onClick={handleCreateTheme}>
							wanna create one?
						</CreateThemeButtonInline>
					</PageWarningMessage>
				)}
			</ThemesListOrderedListWrapper>
			<CreateThemeButton onClick={handleCreateTheme}>
				<IconPlus />
			</CreateThemeButton>
			<CreateThemeModal />
			<DeleteModal />
		</div>
	);
};

export const ThemesList = styled(ThemesListUnstyled)(cssThemesList);
