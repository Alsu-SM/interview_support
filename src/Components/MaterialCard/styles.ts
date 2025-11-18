import { createCSSFunction } from '../../Utils/createCSSFunction';
import { MaterialCardButtonsWrapper, MaterialCardRow } from './styled';

export const cssMaterialCard = createCSSFunction(({ theme }) => ({
	height: 'fit-content',
	[`&:hover, &:focus, &:focus-within`]: {
		[String(MaterialCardButtonsWrapper)]: {
			opacity: 1,
		},
		[String(MaterialCardRow)]: {
			maxWidth: `calc(100% - ${theme.spacing(35)})`,
		},
	},
}));
