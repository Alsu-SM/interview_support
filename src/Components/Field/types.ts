import { HTMLAttributes } from 'react';
import { IComponentBaseProps } from '../../types';
import { IInputProps } from '../Input';
import { ITextareaProps } from '../Textarea';
import { MDEditorProps } from '@uiw/react-md-editor';

export type IMarkDownProps = MDEditorProps;
export type IProps = IInputProps | ITextareaProps | IMarkDownProps;

export interface IFieldProps
	extends IComponentBaseProps,
		HTMLAttributes<HTMLDivElement> {
	disabled?: boolean;
	label?: string;
	required?: boolean;
	type: 'input' | 'textarea' | 'markdown';
	props: IProps;
}
