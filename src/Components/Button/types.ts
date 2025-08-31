import { HTMLAttributes } from 'react';
import { IComponentBaseProps } from '../../types';

export interface IButtonProps
	extends IComponentBaseProps,
		HTMLAttributes<HTMLButtonElement> {
	disabled?: boolean;
	danger?: boolean;
	primary?: boolean;
	plain?: boolean;
}
