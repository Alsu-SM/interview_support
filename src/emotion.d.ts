import '@emotion/react';
import { IAppTheme } from './theme';

declare module '@emotion/react' {
	export interface Theme extends IAppTheme {}
}
