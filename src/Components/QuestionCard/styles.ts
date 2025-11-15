import { createCSSFunction } from '../../Utils/createCSSFunction';
import { QuestionCardButtonsWrapper, QuestionCardRow } from './styled';

export const cssQuestionCard = createCSSFunction(({ theme }) => ({
	height: 'fit-content',
	[`&:hover, &:focus, &:focus-within`]: {
		[String(QuestionCardButtonsWrapper)]: {
			opacity: 1,
		},
		[String(QuestionCardRow)]: {
			maxWidth: `calc(100% - ${theme.spacing(35)})`,
		},
	},
}));
