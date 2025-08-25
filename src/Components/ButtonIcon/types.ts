import { FunctionComponentElement, HTMLAttributes } from 'react';
import { IComponentBaseProps } from '../../types';
import { IIconProps } from '../Icons';

export interface IButtonIconProps
	extends IComponentBaseProps,
		Omit<HTMLAttributes<HTMLButtonElement>, 'children'> {
	icon: FunctionComponentElement<IIconProps>;
	disabled?: boolean | undefined;
	danger?: boolean | undefined;
}
