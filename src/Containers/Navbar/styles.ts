import { createCSSFunction } from '../../Utils/createCSSFunction';

export const cssNavbar = createCSSFunction(({ theme }) => ({
	fontSize: theme.spacing(10),
	color: theme.text.secondary,
	display: 'flex',
	alignItems: 'center',
	gap: theme.spacing(15),
	padding: theme.spacing(8, 12),
	background: theme.bg.primary,
	borderRadius: theme.spacing(10),
	boxShadow: theme.boxShadow.primary,
	backdropFilter: theme.filter.blur.primary,
}));
