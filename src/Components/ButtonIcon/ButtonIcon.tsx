import { cssButtonIcon } from './styles';
import { IButtonIconProps } from './types';
import styled from '@emotion/styled';

const ButtonIconUnstyled = ({ icon, ...restProps }: IButtonIconProps) => {
	return <button {...restProps}>{icon}</button>;
};

ButtonIconUnstyled.displayName = 'ButtonIconUnstyled';

const ButtonIcon = styled(ButtonIconUnstyled)(cssButtonIcon);

export default ButtonIcon;
