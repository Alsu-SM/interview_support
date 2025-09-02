import { ModalChildren } from '../../Components/Modal/styled';
import { createCSSFunction } from '../../Utils/createCSSFunction';

export const cssCreateEditQuestionModal = createCSSFunction(() => ({
	width: '80dvw',
	height: '80dvh',
	maxWidth: '80dvw',
	maxHeight: '80dvh',
	[String(ModalChildren)]: {
		display: 'flex',
		flexDirection: 'column',
		flex: 1,
		overflow: 'hidden',
	},
}));
