import { FC } from 'react';
import { cssInput } from './styles';
import { IInputProps } from './types';
import styled from '@emotion/styled';

const InputUnstyled: FC<IInputProps> = ({ ...restProps }) => {
	return <input {...restProps} />;
};

InputUnstyled.displayName = 'InputUnstyled';

export const Input = styled(InputUnstyled)(cssInput);
