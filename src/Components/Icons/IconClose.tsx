import { cssIcon } from './styles';
import { IIconProps } from './types';
import styled from '@emotion/styled';

const IconCloseUnstyled = ({ className }: IIconProps) => {
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
				d="M18 18L54 54M54 18L18 54"
				stroke="black"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
};

IconCloseUnstyled.displayName = 'IconCloseUnstyled';

export const IconClose = styled(IconCloseUnstyled)(cssIcon);
