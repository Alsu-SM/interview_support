import { createCSSFunction } from '../../Utils/createCSSFunction';
import { ThemeCardButtonsWrapper } from './styled';

export const cssThemeCard = createCSSFunction(() => ({
	[`&:hover, &:focus`]: {
		[String(ThemeCardButtonsWrapper)]: {
			opacity: 1,
		},
	},
}));
