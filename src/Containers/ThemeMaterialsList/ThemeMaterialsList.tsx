import { FC } from 'react';
import styled from '@emotion/styled';
import { useThemeMaterialsList } from './hooks';
import { cssMaterialsList } from './styles';
import OrderedList from '../../Components/OrderedList';
import { IThemeMaterialsListProps } from './types';
import { CreateButtonInline, PageWarningMessage } from '../../Pages/styled';

const ThemeMaterialsListUnstyled: FC<IThemeMaterialsListProps> = ({
	themeId,
	className,
}) => {
	const {
		isThemeNotFound,
		materialsList,
		handleReorder,
		handleCreateMaterial,
	} = useThemeMaterialsList({ themeId });

	if (isThemeNotFound) {
		return (
			<PageWarningMessage>Theme with id {themeId} not found</PageWarningMessage>
		);
	}

	return (
		<div className={className}>
			{materialsList.length ? (
				<OrderedList items={materialsList} onReorder={handleReorder} />
			) : (
				<PageWarningMessage>
					No materials yet,{' '}
					<CreateButtonInline onClick={handleCreateMaterial}>
						wanna create one?
					</CreateButtonInline>
				</PageWarningMessage>
			)}
		</div>
	);
};
ThemeMaterialsListUnstyled.displayName = 'ThemeMaterialsListUnstyled';

export const ThemeMaterialsList = styled(ThemeMaterialsListUnstyled)(
	cssMaterialsList,
);
