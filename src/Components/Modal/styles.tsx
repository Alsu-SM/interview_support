import { createCSSFunction } from '../../Utils/createCSSFunction';
import { IModalProps } from './types';

export const cssModal = createCSSFunction<IModalProps>(({ theme }) => ({
	position: 'fixed',
	top: '50%',
	left: '50%',
	transform: `translate(-50%, -50%)`,
	padding: theme.spacing(10),
	background: theme.bg.primary,
	borderRadius: theme.spacing(2),
	minWidth: theme.spacing(200),
	boxShadow: theme.boxShadow.primary,
	backdropFilter: theme.filter.blur.primary,
	display: 'flex',
	flexDirection: 'column',
	gap: theme.spacing(10),
	border: `${theme.spacing(0.5)} solid ${theme.bg.secondary}`,
}));
