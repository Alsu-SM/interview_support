import { HTMLAttributes } from 'react';
import { IComponentBaseProps } from '../../types';

export interface ITagsInputProps
	extends IComponentBaseProps,
		HTMLAttributes<HTMLDivElement> {
	tags: string[];
	inputValue: string;
	onInputChange: (value: string) => void;
	onTagsListChange?: (tags: string[]) => void;
}
