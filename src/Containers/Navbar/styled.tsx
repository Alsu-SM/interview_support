import styled from '@emotion/styled';
import { createCSSFunction } from '../../Utils/createCSSFunction';
import { NavLink } from 'react-router-dom';

export const cssNavItem = createCSSFunction<{ active: boolean }>(
	({ theme, active }) => [
		{
			fontSize: theme.spacing(10),
			color: active ? theme.text.primary : theme.text.secondary,
			fontWeight: active ? 500 : 300,
			textDecoration: 'none',
			opacity: 0.7,
			transitionDuration: theme.transition.duration.standard,
			transitionTimingFunction: theme.transition.timing.easeInOut,
			borderRadius: theme.spacing(2),
			['&:hover']: {
				opacity: 1,
			},
			'&:focus-visible': {
				outline: `${theme.spacing(1)} solid ${theme.bg.accentDark}`,
				outlineOffset: theme.spacing(2),
			},
		},
	],
);

export const cssNavItems = createCSSFunction(({ theme }) => [
	{
		display: 'flex',
		alignItems: 'center',
		gap: theme.spacing(10),
	},
]);

export const NavItem = styled(NavLink)(cssNavItem);
export const NavItems = styled('div')(cssNavItems);
