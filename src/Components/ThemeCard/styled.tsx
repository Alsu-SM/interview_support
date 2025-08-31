import styled from '@emotion/styled';
import { createCSSFunction } from '../../Utils/createCSSFunction';

export const cssThemeCardLabel = createCSSFunction(({ theme }) => ({
	color: theme.text.secondary,
	fontWeight: 200,
}));

export const cssThemeCardDescription = createCSSFunction<{
	border?: boolean | undefined;
}>(({ theme, border }) => ({
	color: theme.text.secondary,
	fontWeight: 200,
	fontSize: theme.spacing(7),
	borderLeft: border ? `${theme.spacing(1)} solid ${theme.bg.accent}` : ``,
	padding: border ? theme.spacing(1, 4) : 0,
	maxHeight: theme.spacing(22),
	overflow: 'hidden',
}));

export const cssThemeCardProgressRow = createCSSFunction(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	gap: theme.spacing(4),
	marginTop: 'auto',
}));
export const cssThemeCardProgress = createCSSFunction(({ theme }) => ({
	color: theme.text.secondary,
	fontWeight: 200,
	fontSize: theme.spacing(6),
	textAlign: 'left',
}));

export const cssThemeCardValue = createCSSFunction(({ theme }) => ({
	color: theme.text.primary,
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
	textAlign: 'left',
	alignItems: 'center',
}));

export const cssThemeCardButtonsWrapper = createCSSFunction(({ theme }) => ({
	position: 'absolute',
	right: theme.spacing(2),
	top: theme.spacing(2),
	display: 'flex',
	alignItems: 'center',
	gap: theme.spacing(2),
	opacity: 0,
	transitionDuration: theme.transition.duration.standard,
	transitionTimingFunction: theme.transition.timing.easeInOut,
}));

export const ThemeCardLabel = styled('div')(cssThemeCardLabel);
export const ThemeCardValue = styled('span')(cssThemeCardValue);
export const ThemeCardRow = styled('div')(cssThemeCardRow);
export const ThemeCardDescription = styled('span')(cssThemeCardDescription);
export const ThemeCardProgressRow = styled('div')(cssThemeCardProgressRow);
export const ThemeCardProgress = styled('div')(cssThemeCardProgress);
export const ThemeCardButtonsWrapper = styled('div')(
	cssThemeCardButtonsWrapper,
);
