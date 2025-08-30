import styled from '@emotion/styled';
import { IFieldProps } from './types';

export const FieldLabel = styled('div')<Pick<IFieldProps, 'required'>>(
	({ theme, required }) => [
		{
			fontSize: theme.spacing(7),
			color: theme.text.secondary,
			position: 'relative',
		},
		required && {
			'&::after': {
				content: String("'*'"),
				color: theme.text.danger,
			},
		},
	],
);
