import { cssIcon } from './styles';
import { IIconProps } from './types';
import styled from '@emotion/styled';

const IconResizeUnstyled = ({ className }: IIconProps) => {
	return (
		<svg
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path d="M13.5607 4.56065C14.1464 3.97487 14.1464 3.02513 13.5607 2.43934C12.9749 1.85355 12.0251 1.85355 11.4393 2.43934L2.43934 11.4393C1.85355 12.0251 1.85355 12.9749 2.43934 13.5607C3.02513 14.1464 3.97487 14.1464 4.56066 13.5607L13.5607 4.56065ZM13.5607 12.0607C14.1464 11.4749 14.1464 10.5251 13.5607 9.93933C12.9749 9.35355 12.0251 9.35355 11.4393 9.93933L9.93934 11.4393C9.35355 12.0251 9.35355 12.9749 9.93934 13.5607C10.5251 14.1464 11.4749 14.1464 12.0607 13.5607L13.5607 12.0607Z" />
		</svg>
	);
};

IconResizeUnstyled.displayName = 'IconResizeUnstyled';

export const IconResize = styled(IconResizeUnstyled)(cssIcon);
