import styled from '@emotion/styled';
import { cssPageWarningMessage } from './styles';

export const PageWarningMessage = styled('div')(cssPageWarningMessage);

export const CreateButtonInline = styled('button')(({ theme }) => [
	{
		background: 'transparent',
		border: 'none',
		fontSize: 'inherit',
		color: 'inherit',
		transitionDuration: theme.transition.duration.standard,
		transitionTimingFunction: theme.transition.timing.easeInOut,
		borderBottom: `${theme.spacing(1)} dashed ${theme.text.tertiary}`,

		['&:hover']: {
			color: theme.bg.accent,
			borderBottomColor: theme.bg.accent,
			cursor: 'pointer',
		},
	},
]);
