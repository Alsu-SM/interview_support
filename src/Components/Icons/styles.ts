import { createCSSFunction } from '../../Utils/createCSSFunction';
import { IIconProps } from './types';

export const cssIcon = createCSSFunction<IIconProps>(({ theme, color }) => ({
	['path']: {
		stroke: color ?? theme.text.primary,
		transitionDuration: theme.transition.duration.standard,
		transitionTimingFunction: theme.transition.timing.easeInOut,
	},
}));
