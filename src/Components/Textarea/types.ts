import { ComponentProps } from 'react';
import { IComponentBaseProps } from '../../types';

export interface ITextareaProps
	extends IComponentBaseProps,
		ComponentProps<'textarea'> {}
