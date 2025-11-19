import { cssIcon } from './styles';
import { IIconProps } from './types';
import styled from '@emotion/styled';

const IconCheckUnstyled = ({ className }: IIconProps) => {
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
				d="M19.5 7L9 17.5L5 13.5"
				stroke="black"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

IconCheckUnstyled.displayName = 'IconCheckUnstyled';

export const IconCheck = styled(IconCheckUnstyled)(cssIcon);
