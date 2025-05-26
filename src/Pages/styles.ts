import { createCSSFunction } from '../Utils/createCSSFunction';

export const cssPage = createCSSFunction(({ theme }) => ({
	background: theme.bg.contrast,
	color: theme.text.base,
	padding: theme.spacing(8),
	boxSizing: 'border-box',
	height: '100dvh',
	overflow: 'hidden',
	display: 'flex',
	flexDirection: 'column',
	gap: theme.spacing(8),
}));

export const cssPageWarningMessage = createCSSFunction(({ theme }) => ({
	fontSize: theme.spacing(5),
	fontWeight: 700,
	textAlign: 'center',
}));
