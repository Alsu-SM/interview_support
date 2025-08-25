import styled from '@emotion/styled';
import { FC } from 'react';
import { IComponentBaseProps } from '../../types';
import { cssPage } from '../styles';
import { Navbar } from '../../Containers/Navbar';

const PageSettingsUnstyled: FC<IComponentBaseProps> = ({ className }) => {
	return (
		<div className={className}>
			<Navbar />
			PageSettings
		</div>
	);
};

PageSettingsUnstyled.displayName = 'PageSettingsUnstyled';

const PageSettings = styled(PageSettingsUnstyled)(cssPage);
export default PageSettings;
