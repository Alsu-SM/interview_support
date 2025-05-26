import { FC } from 'react';
import styled from '@emotion/styled';
import { useThemeQuestionsList } from './hooks';
import { cssQuestionsList } from './styles';
import OrderedList from '../../Components/OrderedList';
import { IThemeQuestionsListProps } from './types';
import { PageWarningMessage } from '../../Pages/styled';

const ThemeQuestionsListUnstyled: FC<IThemeQuestionsListProps> = ({
	themeId,
	className,
}) => {
	const { isThemeNotFound, questionsList, handleReorder } =
		useThemeQuestionsList({ themeId });

	if (isThemeNotFound) {
		return (
			<PageWarningMessage>Theme with id {themeId} not found</PageWarningMessage>
		);
	}

	return (
		<div className={className}>
			<OrderedList items={questionsList} onReorder={handleReorder} />
		</div>
	);
};

export const ThemeQuestionsList = styled(ThemeQuestionsListUnstyled)(
	cssQuestionsList,
);
