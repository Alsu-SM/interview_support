import styled from '@emotion/styled';
import { createCSSFunction } from '../../Utils/createCSSFunction';

export const cssProgressValue = createCSSFunction(({ theme }) => ({
	position: 'absolute',
	left: 0,
	bottom: 0,
	height: '100%',
	borderRadius: theme.spacing(3),
	background: theme.bg.accent,
}));

export const ProgressValue = styled('div')(cssProgressValue);
