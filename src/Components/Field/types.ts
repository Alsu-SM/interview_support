import { HTMLAttributes } from 'react';
import { IComponentBaseProps } from '../../types';
import { IInputProps } from '../Input';
import { ITextareaProps } from '../Textarea';

export type IProps = IInputProps | ITextareaProps;

export interface IFieldProps
	extends IComponentBaseProps,
		HTMLAttributes<HTMLDivElement> {
	disabled?: boolean;
	label?: string;
	required?: boolean;
	type: 'input' | 'textarea';
	props: IProps;
}
