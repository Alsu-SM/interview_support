import { HTMLAttributes } from 'react';
import { IComponentBaseProps } from '../../types';
import { IInputProps } from '../Input';
import { ITextareaProps } from '../Textarea';
import { MDEditorProps } from '@uiw/react-md-editor';
import { ITagsInputProps } from '../TagsInput';

export type IMarkDownProps = MDEditorProps;
export type IProps =
	| IInputProps
	| ITagsInputProps
	| ITextareaProps
	| IMarkDownProps;

export interface IFieldProps
	extends IComponentBaseProps,
		HTMLAttributes<HTMLDivElement> {
	disabled?: boolean;
	label?: string;
	required?: boolean;
	type: 'input' | 'tags' | 'textarea' | 'markdown';
	props: IProps;
}
