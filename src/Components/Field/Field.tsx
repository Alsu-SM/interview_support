import { IInputProps, Input } from '../Input';
import { ITextareaProps, Textarea } from '../Textarea';
import { FieldLabel } from './styled';
import { cssField } from './styles';
import { IFieldProps } from './types';
import styled from '@emotion/styled';

const FieldUnstyled = ({
	label,
	type,
	props,
	required,
	...restProps
}: IFieldProps) => {
	return (
		<div {...restProps}>
			{label && <FieldLabel required={required}>{label}</FieldLabel>}
			{type === 'input' ? (
				<Input {...(props as IInputProps)} />
			) : (
				<Textarea {...(props as ITextareaProps)} />
			)}
		</div>
	);
};

FieldUnstyled.displayName = 'FieldUnstyled';

export const Field = styled(FieldUnstyled)(cssField);
