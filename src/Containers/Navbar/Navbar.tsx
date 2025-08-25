import { FC } from 'react';
import styled from '@emotion/styled';
import { cssNavbar } from './styles';

import { IComponentBaseProps } from '../../types';
import { Greetings } from '../Greetings';
import { useNavbar } from './hooks';
import { NavItems } from './styled';

const NavbarUnstyled: FC<IComponentBaseProps> = ({ className }) => {
	const { navLinks } = useNavbar();

	return (
		<div className={className}>
			<NavItems>{navLinks}</NavItems>
			<Greetings />
		</div>
	);
};
NavbarUnstyled.displayName = 'NavbarUnstyled';

export const Navbar = styled(NavbarUnstyled)(cssNavbar);
