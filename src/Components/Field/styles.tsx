import { createCSSFunction } from '../../Utils/createCSSFunction';

export const cssField = createCSSFunction(({ theme }) => [
	{
		display: 'flex',
		flexDirection: 'column',
		gap: theme.spacing(4),
		[`div.w-md-editor`]: {
			background: theme.bg.primary,
			borderRadius: theme.spacing(4),
			'--md-editor-background-color': `${theme.bg.primary} !important`,
			[`div.wmde-markdown`]: {
				background: 'transparent	',
			},
		},
	},
]);
