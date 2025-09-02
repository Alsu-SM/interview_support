import { CSSProperties } from 'react';
import { IInputProps, Input } from '../Input';
import { ITextareaProps, Textarea } from '../Textarea';
import { FieldLabel } from './styled';
import { cssField } from './styles';
import { IFieldProps, IMarkDownProps } from './types';
import styled from '@emotion/styled';
import MDEditor from '@uiw/react-md-editor';

const FieldUnstyled = ({
	label,
	type,
	props,
	required,
	...restProps
}: IFieldProps) => {
	const getField = () => {
		switch (type) {
			case 'input':
				return <Input {...(props as IInputProps)} />;
			case 'textarea':
				return <Textarea {...(props as ITextareaProps)} />;
			case 'markdown':
			default:
				return (
					<MDEditor
						{...(props as IMarkDownProps)}
						style={
							{
								['--md-editor-font-family']: 'var(--font-family)',
							} as CSSProperties
						}
					/>
				);
		}
	};

	return (
		<div {...restProps}>
			{label && <FieldLabel required={required}>{label}</FieldLabel>}
			{getField()}
		</div>
	);
};

FieldUnstyled.displayName = 'FieldUnstyled';

export const Field = styled(FieldUnstyled)(cssField);
