import { FC } from 'react';
import { cssTextarea } from './styles';
import { ITextareaProps } from './types';
import styled from '@emotion/styled';
import { TextareaElement, TextareaIconResize } from './styled';

const TextareaUnstyled: FC<ITextareaProps> = ({ className, ...restProps }) => {
	return (
		<div className={className}>
			<TextareaElement {...restProps} />
			<TextareaIconResize />
		</div>
	);
};

TextareaUnstyled.displayName = 'TextareaUnstyled';

export const Textarea = styled(TextareaUnstyled)(cssTextarea);
