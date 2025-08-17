import { createCSSFunction } from '../../Utils/createCSSFunction';

export const cssProgress = createCSSFunction(({ theme }) => ({
	width: '100%',
	position: 'relative',
	background: theme.bg.inverse.primary,
	borderRadius: theme.spacing(3),
	height: theme.spacing(4),
}));
