import { FC } from 'react';
import styled from '@emotion/styled';
import { useCreateEditQuestionModal } from './hooks';
import { IComponentBaseProps } from '../../types';
import Modal from '../../Components/Modal/Modal';
import {
	CreateEditQuestionFieldAnswer,
	CreateEditQuestionFieldQuestion,
	CreateEditQuestionModalContent,
} from './styled';
import { cssCreateEditQuestionModal } from './styles';

const CreateEditQuestionModalUnstyled: FC<IComponentBaseProps> = ({
	className,
}) => {
	const {
		open,
		buttons,
		questionFieldProps,
		answerFieldProps,
		title,
		handleClose,
	} = useCreateEditQuestionModal();

	return (
		<Modal
			open={open}
			onClose={handleClose}
			title={title}
			className={className}
			buttons={buttons}
		>
			<CreateEditQuestionModalContent>
				<CreateEditQuestionFieldQuestion
					label={'Question'}
					type="textarea"
					required
					props={questionFieldProps}
				/>
				<CreateEditQuestionFieldAnswer
					label={'Answer'}
					type="markdown"
					required
					props={answerFieldProps}
				/>
			</CreateEditQuestionModalContent>
		</Modal>
	);
};
CreateEditQuestionModalUnstyled.displayName = 'CreateEditQuestionModalUnstyled';

export const CreateEditQuestionModal = styled(CreateEditQuestionModalUnstyled)(
	cssCreateEditQuestionModal,
);
