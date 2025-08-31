import { ComponentProps, HTMLAttributes } from 'react';
import { IComponentBaseProps } from '../../types';

export interface ITagProps
	extends IComponentBaseProps,
		HTMLAttributes<HTMLDivElement> {
	label: string;
	selected?: boolean;
	onSelectChange?: (selected: boolean) => void;
	onClick?: ComponentProps<'div'>['onClick'];
	onClose?: () => void;
}
