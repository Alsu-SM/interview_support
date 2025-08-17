import { FC } from 'react';
import { IThemeCardProps } from './types';
import styled from '@emotion/styled';
import { cssThemeCard } from './styles';
import {
	ThemeCardDescription,
	ThemeCardLabel,
	ThemeCardProgress,
	ThemeCardProgressRow,
	ThemeCardRow,
	ThemeCardValue,
	ThemeCardWrapper,
} from './styled';
import { useThemeCard } from './hooks';
import { Progress } from '../Progress/Progress';

const ThemeCardUnstyled: FC<IThemeCardProps> = ({
	id,
	themeData,
	className,
}) => {
	const {
		progress,
		studiedQuestionsCount,
		allTags,
		shownTags,
		tagsMore,
		handleClick,
	} = useThemeCard({
		theme: themeData,
	});

	return (
		<button
			type="button"
			className={className}
			onClick={handleClick}
			id={id}
			key={id}
		>
			<ThemeCardWrapper>
				<ThemeCardRow>
					<ThemeCardLabel>Theme:</ThemeCardLabel>
					<ThemeCardValue title={themeData.name}>
						{themeData.name}
					</ThemeCardValue>
				</ThemeCardRow>
				<ThemeCardRow>
					<ThemeCardDescription title={themeData.description} border>
						{themeData.description}
					</ThemeCardDescription>
				</ThemeCardRow>
				<ThemeCardRow>
					<ThemeCardLabel>Questions:</ThemeCardLabel>
					<ThemeCardValue>{themeData.questions.length}</ThemeCardValue>
					<ThemeCardDescription>{`(${studiedQuestionsCount} studied)`}</ThemeCardDescription>
				</ThemeCardRow>
				<ThemeCardRow>
					<ThemeCardLabel>Tags:</ThemeCardLabel>
					<ThemeCardValue title={allTags}>
						{shownTags}
						{tagsMore && (
							<ThemeCardDescription>{tagsMore}</ThemeCardDescription>
						)}
					</ThemeCardValue>
				</ThemeCardRow>
				<ThemeCardProgressRow>
					<Progress value={progress} />
					<ThemeCardProgress>{`${progress}% completed`}</ThemeCardProgress>
				</ThemeCardProgressRow>
			</ThemeCardWrapper>
		</button>
	);
};
ThemeCardUnstyled.displayName = 'ThemeCardUnstyled';

export const ThemeCard = styled(ThemeCardUnstyled)(cssThemeCard);
