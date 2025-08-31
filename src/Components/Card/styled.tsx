import styled from '@emotion/styled';

import { createCSSFunction } from '../../Utils/createCSSFunction';

export const cssCardWrapper = createCSSFunction(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	gap: theme.spacing(5),
	borderRadius: theme.spacing(5),
	background: theme.bg.secondary,
	boxShadow: theme.boxShadow.primary,
	backdropFilter: theme.filter.blur.primary,
	padding: theme.spacing(6),
	flex: 1,
	boxSizing: 'border-box',
	width: '100%',
}));

export const CardWrapper = styled('div')(cssCardWrapper);
