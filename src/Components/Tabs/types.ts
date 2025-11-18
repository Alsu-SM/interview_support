import { HTMLAttributes, ReactNode } from 'react';
import { IComponentBaseProps } from '../../types';

export interface ITabsItem {
	id: string;
	label: ReactNode;
	content: ReactNode;
}
export interface ITabsProps
	extends IComponentBaseProps,
		Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
	items: ITabsItem[];
	selectedId?: string;
	defaultSelectedId?: string;
	onChange?: (selectedId: string) => void;
}
