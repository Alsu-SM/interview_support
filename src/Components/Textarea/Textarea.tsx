import { FC } from 'react';
import { cssTextarea } from './styles';
import { ITextareaProps } from './types';
import styled from '@emotion/styled';

const TextareaUnstyled: FC<ITextareaProps> = ({ ...restProps }) => {
	return <textarea {...restProps} />;
};

TextareaUnstyled.displayName = 'TextareaUnstyled';

export const Textarea = styled(TextareaUnstyled)(cssTextarea);
