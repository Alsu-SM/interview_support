import { cssButtonIcon } from './styles';
import { IButtonProps } from './types';
import styled from '@emotion/styled';

const ButtonUnstyled = ({ danger, primary, ...restProps }: IButtonProps) => {
	return <button {...restProps} />;
};

ButtonUnstyled.displayName = 'ButtonUnstyled';

export const Button = styled(ButtonUnstyled)(cssButtonIcon);
