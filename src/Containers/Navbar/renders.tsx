import { RouteItem } from '../../Routes/types';
import { NavItem } from './styled';

export const renderNavItem = (route: RouteItem, active: boolean) => {
	if (route.hidden) {
		return null;
	}

	return (
		<NavItem
			id={`nav_link_${route.key}`}
			to={route.path}
			key={route.path}
			active={active}
		>
			{route.displayName}
		</NavItem>
	);
};
