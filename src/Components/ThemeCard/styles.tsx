import { createCSSFunction } from '../../Utils/createCSSFunction';
import { ThemeCardButtonsWrapper } from './styled';

export const cssThemeCard = createCSSFunction(() => ({
	[`&:hover, &:focus, &:focus-within`]: {
		[String(ThemeCardButtonsWrapper)]: {
			opacity: 1,
		},
	},
}));
