import { cssIcon } from './styles';
import { IIconProps } from './types';
import styled from '@emotion/styled';

const IconBookOpenUnstyled = ({ className }: IIconProps) => {
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
				d="M12 7.32237C10.4414 5.24604 5.80377 5.14536 2 6.14787V19.811C4.69417 18.5499 9.5481 18.1445 12 20.2491M12 7.32237V20.2491M12 7.32237C13.5586 5.24604 18.1962 5.14536 22 6.14787V19.811C19.3058 18.5499 14.4519 18.1445 12 20.2491"
				stroke="black"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
};

IconBookOpenUnstyled.displayName = 'IconBookOpenUnstyled';

export const IconBookOpen = styled(IconBookOpenUnstyled)(cssIcon);
