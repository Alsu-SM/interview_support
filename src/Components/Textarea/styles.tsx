import { createCSSFunction } from '../../Utils/createCSSFunction';
import { ITextareaProps } from './types';

export const cssTextarea = createCSSFunction<ITextareaProps>(() => [
	{
		position: 'relative',
		width: '100%',
		maxWidth: 'fit-content',
		height: 'fit-content',
		display: 'flex',
		flex: 1,
	},
]);
