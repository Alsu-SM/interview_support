import styled from '@emotion/styled';

export const ModalOverlay = styled('div')(({ theme }) => ({
	position: 'fixed',
	left: 0,
	top: 0,
	width: '100dvw',
	height: '100dvh',
	background: theme.bg.primary,
	backdropFilter: theme.filter.blur.primary,
}));

export const ModalTitle = styled('div')(({ theme }) => ({
	color: theme.text.primary,
	fontSize: theme.spacing(10),
}));

export const ModalChildren = styled('div')(({ theme }) => ({
	color: theme.text.secondary,
	fontSize: theme.spacing(8),
}));

export const ModalButtons = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	gap: theme.spacing(5),
	justifyContent: 'flex-end',
}));
