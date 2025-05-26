import styled from '@emotion/styled';
import { createCSSFunction } from '../../Utils/createCSSFunction';

export const cssThemeCardLabel = createCSSFunction(({ theme }) => ({
	color: theme.text.soft,
	fontWeight: 400,
	width: theme.spacing(22),
}));

export const cssThemeCardValue = createCSSFunction(({ theme }) => ({
	color: theme.text.base,
	fontWeight: 700,
	textAlign: 'right',
	whiteSpace: 'nowrap',
	overflow: 'hidden',
	textOverflow: 'ellipsis',
	boxSizing: 'border-box',
}));

export const cssThemeCardRow = createCSSFunction(({ theme }) => ({
	display: 'flex',
	gap: theme.spacing(3),
}));

export const cssThemeCardMessage = createCSSFunction(({ theme }) => ({
	fontSize: theme.spacing(5),
	color: theme.text.base,
	fontWeight: 700,
	display: 'none',
	margin: 'auto',
}));

export const ThemeCardLabel = styled('div')(cssThemeCardLabel);
export const ThemeCardValue = styled('div')(cssThemeCardValue);
export const ThemeCardRow = styled('div')(cssThemeCardRow);
export const ThemeCardMessage = styled('div')(cssThemeCardMessage);
