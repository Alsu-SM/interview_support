import styled from '@emotion/styled';
import { createCSSFunction } from '../../Utils/createCSSFunction';

export const cssMaterialCardLabel = createCSSFunction(({ theme }) => ({
	color: theme.text.secondary,
	fontWeight: 200,
}));

export const cssMaterialCardValue = createCSSFunction(({ theme }) => ({
	color: theme.text.primary,
	fontWeight: 700,
	textAlign: 'right',
	whiteSpace: 'nowrap',
	overflow: 'hidden',
	textOverflow: 'ellipsis',
	boxSizing: 'border-box',
}));

export const cssMaterialCardRow = createCSSFunction(({ theme }) => ({
	display: 'flex',
	gap: theme.spacing(3),
	textAlign: 'left',
	alignItems: 'center',
}));

export const cssMaterialTag = createCSSFunction(({ theme }) => ({
	fontSize: theme.spacing(6),
	color: theme.text.secondary,
	background: theme.bg.inverse.primary,
	padding: theme.spacing(2, 3),
	borderRadius: theme.spacing(12),
}));

export const cssMaterialTagsList = createCSSFunction(({ theme }) => ({
	display: 'flex',
	gap: theme.spacing(4),
}));

export const cssMaterialCardButtonsWrapper = createCSSFunction(({ theme }) => ({
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

export const MaterialCardLabel = styled('div')(cssMaterialCardLabel);
export const MaterialCardValue = styled('div')(cssMaterialCardValue);
export const MaterialCardRow = styled('div')(cssMaterialCardRow);
export const MaterialTag = styled('div')(cssMaterialTag);
export const MaterialTagsList = styled('div')(cssMaterialTagsList);
export const MaterialCardButtonsWrapper = styled('div')(
	cssMaterialCardButtonsWrapper,
);
