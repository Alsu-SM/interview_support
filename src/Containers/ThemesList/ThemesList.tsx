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
import { Button } from '../../Components/Button';
import { CreateThemeModal } from '../CreateThemeModal';

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
			<Button>Label</Button>
			<Button danger>Label</Button>
			<Button primary>Label</Button>
			<CreateThemeButton onClick={handleCreateTheme}>
				<IconPlus />
			</CreateThemeButton>
			<CreateThemeModal />
		</div>
	);
};

export const ThemesList = styled(ThemesListUnstyled)(cssThemesList);
