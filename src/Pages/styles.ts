import { createCSSFunction } from '../Utils/createCSSFunction';

export const cssPage = createCSSFunction(({ theme }) => ({
	background: theme.bg.page,
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover',
	color: theme.text.primary,
	padding: theme.spacing(10, 20),
	boxSizing: 'border-box',
	height: '100dvh',
	overflow: 'hidden',
	display: 'flex',
	flexDirection: 'column',
	gap: theme.spacing(8),
}));

export const cssPageWarningMessage = createCSSFunction(({ theme }) => ({
	fontSize: theme.spacing(10),
	fontWeight: 500,
	textAlign: 'center',
}));
