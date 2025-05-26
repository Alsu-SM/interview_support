import { FC } from 'react';
import { IThemeCardProps } from './types';
import styled from '@emotion/styled';
import { cssThemeCard } from './styles';
import {
	ThemeCardLabel,
	ThemeCardMessage,
	ThemeCardRow,
	ThemeCardValue,
} from './styled';
import { useThemeCard } from './hooks';

const ThemeCardUnstyled: FC<IThemeCardProps> = ({
	id,
	themeData,
	className,
}) => {
	const { handleClick } = useThemeCard({ theme: themeData });

	return (
		<button
			type="button"
			className={className}
			onClick={handleClick}
			id={id}
			key={id}
		>
			<ThemeCardRow>
				<ThemeCardLabel>Theme:</ThemeCardLabel>
				<ThemeCardValue title={themeData.name}>{themeData.name}</ThemeCardValue>
			</ThemeCardRow>
			<ThemeCardRow>
				<ThemeCardLabel>Description:</ThemeCardLabel>
				<ThemeCardValue title={themeData.description}>
					{themeData.description}
				</ThemeCardValue>
			</ThemeCardRow>
			<ThemeCardRow>
				<ThemeCardLabel>Questions:</ThemeCardLabel>
				<ThemeCardValue>{themeData.questions.length}</ThemeCardValue>
			</ThemeCardRow>
			<ThemeCardMessage>{'Go to theme ->'}</ThemeCardMessage>
		</button>
	);
};
ThemeCardUnstyled.displayName = 'ThemeCardUnstyled';

export const ThemeCard = styled(ThemeCardUnstyled)(cssThemeCard);
