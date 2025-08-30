import styled from '@emotion/styled';
import { Textarea } from '../../Components/Textarea';
import { TextareaElement } from '../../Components/Textarea/styled';

export const CreateThemeModalContent = styled('div')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	width: '100%',
	gap: theme.spacing(10),
	[String(Textarea)]: {
		width: '100%',
		maxWidth: '100%',
		[String(TextareaElement)]: {
			resize: 'vertical',
			width: '100%',
			maxHeight: theme.spacing(100),
			minHeight: theme.spacing(40),
		},
	},
}));
