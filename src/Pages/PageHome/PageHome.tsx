import styled from '@emotion/styled';
import { FC } from 'react';
import { ComponentPropsBase } from '../../types';
import { ThemesList } from '../../Containers/ThemesList/ThemesList';
import { cssPage } from '../styles';
import { Navbar } from '../../Containers/Navbar';

const PageHomeUnstyled: FC<ComponentPropsBase> = ({ className }) => {
	return (
		<div className={className}>
			<Navbar />
			<ThemesList />
		</div>
	);
};

const PageHome = styled(PageHomeUnstyled)(cssPage);
export default PageHome;
