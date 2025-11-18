import styled from '@emotion/styled';
import { Field } from '../../Components/Field';
import { cssScrollbar } from '../../Utils/scrollbar';
import { Textarea } from '../../Components/Textarea';
import { TextareaElement } from '../../Components/Textarea/styled';

export const CreateEditMaterialFieldTitle = styled(Field)(({ theme }) => ({
	[String(Textarea)]: {
		width: '100%',
		maxWidth: '100%',
		[String(TextareaElement)]: {
			resize: 'vertical',
			width: '100%',
			maxHeight: theme.spacing(100),
			minHeight: theme.spacing(30),
		},
	},
}));
export const CreateEditMaterialFieldTags = styled(Field)(() => ({}));
export const CreateEditMaterialFieldMaterial = styled(Field)(() => ({
	flex: 1,
	overflow: 'hidden',
	[`>div:nth-child(2)`]: {
		flex: 1,
	},
}));

export const CreateEditMaterialModalContent = styled('div')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	width: '100%',
	gap: theme.spacing(10),
	flex: 1,
	overflow: 'hidden',
	[`div.w-md-editor-input, div.w-md-editor-preview `]: [
		cssScrollbar({
			theme,
			inverse: true,
		}),
	],
}));
