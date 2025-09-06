import { createCSSFunction } from '../../Utils/createCSSFunction';
import ButtonIcon from '../ButtonIcon/ButtonIcon';

export const cssTag = createCSSFunction(({ theme }) => [
	{
		display: 'flex',
		alignItems: 'center',
		gap: theme.spacing(2),
		fontSize: theme.spacing(6),
		color: theme.text.secondary,
		background: theme.bg.inverse.secondary,
		padding: theme.spacing(2, 3),
		borderRadius: theme.spacing(12),
		transitionDuration: theme.transition.duration.standard,
		transitionTimingFunction: theme.transition.timing.easeInOut,
		cursor: 'pointer',
		[`&:hover, &:focus`]: {
			background: theme.bg.inverse.primary,
		},
		[String(ButtonIcon)]: {
			width: theme.spacing(10),
			height: theme.spacing(10),
			padding: theme.spacing(1),
		},
	},
]);
