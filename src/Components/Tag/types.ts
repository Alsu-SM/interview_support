import { HTMLAttributes } from 'react';
import { IComponentBaseProps } from '../../types';

export interface ITagProps
	extends IComponentBaseProps,
		HTMLAttributes<HTMLDivElement> {
	label: string;
	allowDelete?: boolean;
	selected?: boolean;
	success?: boolean;
	warning?: boolean;
	danger?: boolean;
	onSelectChange?: (selected: boolean) => void;
	onDelete?: () => void;
}
