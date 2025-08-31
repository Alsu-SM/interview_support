import { FC } from 'react';
import styled from '@emotion/styled';

import { useCreateEditQuestionModal } from './hooks';
import { IComponentBaseProps } from '../../types';
import Modal from '../../Components/Modal/Modal';
import { CreateEditQuestionModalContent } from './styled';
import { Field } from '../../Components/Field';
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
				<Field
					label={'Question'}
					type="textarea"
					required
					props={questionFieldProps}
				/>
				<Field label={'Answer'} type="textarea" props={answerFieldProps} />
			</CreateEditQuestionModalContent>
		</Modal>
	);
};
CreateEditQuestionModalUnstyled.displayName = 'CreateEditQuestionModalUnstyled';

export const CreateEditQuestionModal = styled(CreateEditQuestionModalUnstyled)(
	cssCreateEditQuestionModal,
);
