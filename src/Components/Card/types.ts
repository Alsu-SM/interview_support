import { HTMLAttributes } from 'react';
import { IComponentBaseProps } from '../../types';

export interface ICardProps
	extends IComponentBaseProps,
		HTMLAttributes<HTMLButtonElement> {}
