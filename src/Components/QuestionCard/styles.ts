import { createCSSFunction } from '../../Utils/createCSSFunction';
import { QuestionCardButtonsWrapper } from './styled';

export const cssQuestionCard = createCSSFunction(() => ({
	height: 'fit-content',
	[`&:hover, &:focus`]: {
		[String(QuestionCardButtonsWrapper)]: {
			opacity: 1,
		},
	},
}));
