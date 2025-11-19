import { cssIcon } from './styles';
import { IIconProps } from './types';
import styled from '@emotion/styled';

const IconLineChartUnstyled = ({ className }: IIconProps) => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path
				d="M3 16.5L9 10L13 16L21 6.5"
				stroke="black"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

IconLineChartUnstyled.displayName = 'IconLineChartUnstyled';

export const IconLineChart = styled(IconLineChartUnstyled)(cssIcon);
