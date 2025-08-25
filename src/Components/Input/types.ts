import { ComponentProps } from 'react';
import { IComponentBaseProps } from '../../types';

export interface IInputProps
	extends IComponentBaseProps,
		ComponentProps<'input'> {}
