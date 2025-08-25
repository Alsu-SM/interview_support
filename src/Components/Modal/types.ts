import { HTMLAttributes, ReactNode } from 'react';
import { IComponentBaseProps } from '../../types';
import { IButtonProps } from '../Button';

export interface IModalProps
	extends IComponentBaseProps,
		HTMLAttributes<HTMLDivElement> {
	open: boolean;
	onClose?: () => void;
	header?: ReactNode;
	buttons?: (IButtonProps & { key: string })[];
}
