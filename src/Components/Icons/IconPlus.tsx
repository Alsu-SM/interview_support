import { cssIcon } from './styles';
import { IIconProps } from './types';
import styled from '@emotion/styled';

const IconPlusUnstyled = ({ className }: IIconProps) => {
	return (
		<svg
			width="72"
			height="72"
			viewBox="0 0 72 72"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path
				id="Icon"
				d="M36 18V54M54 36H18"
				stroke="black"
				stroke-width="4"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
};

IconPlusUnstyled.displayName = 'IconPlusUnstyled';

export const IconPlus = styled(IconPlusUnstyled)(cssIcon);
