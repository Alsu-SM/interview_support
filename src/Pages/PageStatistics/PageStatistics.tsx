import styled from '@emotion/styled';
import { FC } from 'react';
import { IComponentBaseProps } from '../../types';
import { cssPage } from '../styles';

const PageStatisticsUnstyled: FC<IComponentBaseProps> = ({ className }) => {
	return <div className={className}>PageStatistics</div>;
};

PageStatisticsUnstyled.displayName = 'PageStatisticsUnstyled';

const PageStatistics = styled(PageStatisticsUnstyled)(cssPage);
export default PageStatistics;
