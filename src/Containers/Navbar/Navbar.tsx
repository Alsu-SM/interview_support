import { FC } from 'react';
import styled from '@emotion/styled';
import { cssNavbar } from './styles';

import { ComponentPropsBase } from '../../types';
import { Greetings } from '../Greetings';

const NavbarUnstyled: FC<ComponentPropsBase> = ({ className }) => {
	return (
		<div className={className}>
			<Greetings />
		</div>
	);
};
NavbarUnstyled.displayName = 'NavbarUnstyled';

export const Navbar = styled(NavbarUnstyled)(cssNavbar);
