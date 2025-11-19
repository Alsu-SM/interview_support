import { HTMLAttributes, ReactNode } from 'react';
import { IComponentBaseProps } from '../../types';

export interface ISummaryCardProps
	extends IComponentBaseProps,
		HTMLAttributes<HTMLDivElement> {
	title: string;
	icon: ReactNode;
	value: string;
	subtitle?: string;
}
