import { useLocation } from 'react-router-dom';
import { routes } from '../../Routes';
import { renderNavItem } from './renders';
import { useMemo } from 'react';

export const useNavbar = () => {
	const location = useLocation();

	const navLinks = useMemo(
		() =>
			routes.map((item) => {
				const isActive: boolean = location.pathname === item.path;
				console.log({ item, location });
				return renderNavItem(item, isActive);
			}),
		[location.hash],
	);

	return { navLinks };
};
