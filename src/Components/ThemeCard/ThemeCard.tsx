import { FC } from 'react';
import { IThemeCardProps } from './types';
import styled from '@emotion/styled';
import {
	ThemeCardButtonsWrapper,
	ThemeCardDescription,
	ThemeCardLabel,
	ThemeCardProgress,
	ThemeCardProgressRow,
	ThemeCardRow,
	ThemeCardValue,
	ThemeTags,
} from './styled';
import { useThemeCard } from './hooks';
import { Progress } from '../Progress/Progress';
import ButtonIcon from '../ButtonIcon/ButtonIcon';
import { IconEdit, IconDelete } from '../Icons';
import { Card } from '../Card';
import { cssThemeCard } from './styles';

const ThemeCardUnstyled: FC<IThemeCardProps> = ({
	id,
	themeData,
	className,
}) => {
	const { progress, allTags, handleClick, handleEdit, handleDelete } =
		useThemeCard({
			theme: themeData,
		});

	return (
		<Card className={className} onClick={handleClick} id={id} key={id}>
			<ThemeCardButtonsWrapper>
				<ButtonIcon icon={<IconEdit />} onClick={handleEdit} />
				<ButtonIcon icon={<IconDelete />} danger onClick={handleDelete} />
			</ThemeCardButtonsWrapper>
			<ThemeCardRow>
				<ThemeCardLabel>Theme:</ThemeCardLabel>
				<ThemeCardValue title={themeData.name}>{themeData.name}</ThemeCardValue>
			</ThemeCardRow>
			{themeData.description && (
				<ThemeCardRow>
					<ThemeCardDescription title={themeData.description} border>
						{themeData.description}
					</ThemeCardDescription>
				</ThemeCardRow>
			)}
			<ThemeCardRow>
				<ThemeCardLabel>Questions:</ThemeCardLabel>
				<ThemeCardValue>{themeData.questions.length}</ThemeCardValue>
			</ThemeCardRow>
			<ThemeCardRow>
				<ThemeCardLabel>Materials:</ThemeCardLabel>
				<ThemeCardValue>{themeData.materials.length}</ThemeCardValue>
			</ThemeCardRow>
			<ThemeCardRow>
				<ThemeCardLabel>Tags:</ThemeCardLabel>
				<ThemeTags>{allTags}</ThemeTags>
			</ThemeCardRow>
			<ThemeCardProgressRow>
				<Progress value={progress} />
				<ThemeCardProgress>{`${progress}% completed`}</ThemeCardProgress>
			</ThemeCardProgressRow>
		</Card>
	);
};
ThemeCardUnstyled.displayName = 'ThemeCardUnstyled';

export const ThemeCard = styled(ThemeCardUnstyled)(cssThemeCard);
