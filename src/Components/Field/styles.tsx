import { createCSSFunction } from '../../Utils/createCSSFunction';

export const cssField = createCSSFunction(({ theme }) => [
	{
		display: 'flex',
		flexDirection: 'column',
		gap: theme.spacing(4),
		[`div.w-md-editor`]: {
			borderRadius: theme.spacing(4),
			background: theme.bg.primary,
			'--md-editor-background-color': `${theme.bg.primary} !important`,
			[`&.w-md-editor-fullscreen`]: {
				background: theme.bg.primaryOpaque,
				'--md-editor-background-color': `${theme.bg.primaryOpaque} !important`,
			},
			[`div.wmde-markdown`]: {
				background: 'transparent',
			},
		},
	},
]);
