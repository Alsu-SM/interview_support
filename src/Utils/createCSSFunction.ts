import { css, SerializedStyles } from '@emotion/react';
import { IAppTheme } from '../theme';

export type IThemeWithProps<
	TProps extends Record<PropertyKey, any> = Record<never, never>,
	TRequiredTheme extends boolean = true,
> = Omit<TProps, 'theme'> &
	(TRequiredTheme extends true ? { theme: IAppTheme } : { theme?: IAppTheme });

export type ICSSFunction<
	TProps extends Record<PropertyKey, any> = Record<never, never>,
	TRequiredTheme extends boolean = true,
> = TRequiredTheme extends true
	? (props: IThemeWithProps<TProps, false>) => SerializedStyles
	: (props?: IThemeWithProps<TProps, false>) => SerializedStyles;

export type CallbackType<
	TProps extends Record<PropertyKey, any> = Record<never, never>,
	TRequiredTheme extends boolean = true,
> =
	| ((
			props: IThemeWithProps<TProps, TRequiredTheme>,
	  ) =>
			| Parameters<typeof css>[number]
			| (
					| Parameters<typeof css>[number]
					| ((
							props: IThemeWithProps<TProps, TRequiredTheme>,
					  ) => SerializedStyles)
			  )[]
			| SerializedStyles)
	| (
			| Parameters<typeof css>[number]
			| ((props: IThemeWithProps<TProps, TRequiredTheme>) => SerializedStyles)
	  )[]
	| SerializedStyles;

export type CreateCSSFunctionType<
	TProps extends Record<PropertyKey, any> = Record<never, never>,
	TRequiredTheme extends boolean = true,
> = (
	callback: CallbackType<TProps, TRequiredTheme>,
) => ICSSFunction<TProps, TRequiredTheme>;

export const createCSSFunction =
	<
		TProps extends Record<PropertyKey, any> = Record<never, never>,
		TRequiredTheme extends boolean = true,
	>(
		callback: CallbackType<TProps, TRequiredTheme>,
	) =>
	(props: TProps) => {
		const currentProps = (props ?? {}) as unknown as IThemeWithProps<TProps>;
		const result =
			typeof callback === 'function' ? callback(currentProps) : callback;

		if (Array.isArray(result)) {
			return css(
				result.map((item) =>
					typeof item === 'function' ? item(currentProps) : item,
				),
			);
		}

		return css(result);
	};
