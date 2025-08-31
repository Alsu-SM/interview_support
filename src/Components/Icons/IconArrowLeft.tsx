import { cssIcon } from './styles';
import { IIconProps } from './types';
import styled from '@emotion/styled';

const IconArrowLeftUnstyled = ({ className }: IIconProps) => {
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
				d="M33 18L15 36M15 36L33 54M15 36H57"
				stroke="black"
				stroke-width="4"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
};

IconArrowLeftUnstyled.displayName = 'IconArrowLeftUnstyled';

export const IconArrowLeft = styled(IconArrowLeftUnstyled)(cssIcon);
