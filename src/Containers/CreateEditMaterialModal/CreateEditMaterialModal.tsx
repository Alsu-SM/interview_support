import { FC } from 'react';
import styled from '@emotion/styled';
import { useCreateEditMaterialModal } from './hooks';
import { IComponentBaseProps } from '../../types';
import Modal from '../../Components/Modal/Modal';
import {
	CreateEditMaterialFieldMaterial,
	CreateEditMaterialFieldTitle,
	CreateEditMaterialModalContent,
} from './styled';
import { cssCreateEditMaterialModal } from './styles';

const CreateEditMaterialModalUnstyled: FC<IComponentBaseProps> = ({
	className,
}) => {
	const {
		open,
		buttons,
		materialFieldProps,
		answerFieldProps,
		tagsFieldProps,
		title,
		handleClose,
	} = useCreateEditMaterialModal();

	return (
		<Modal
			open={open}
			onClose={handleClose}
			title={title}
			className={className}
			buttons={buttons}
		>
			<CreateEditMaterialModalContent>
				<CreateEditMaterialFieldTitle
					label={'Title'}
					type="textarea"
					required
					props={materialFieldProps}
				/>
				<CreateEditMaterialFieldTitle
					label={'Tags'}
					type="tags"
					props={tagsFieldProps}
				/>
				<CreateEditMaterialFieldMaterial
					label={'Material'}
					type="markdown"
					required
					props={answerFieldProps}
				/>
			</CreateEditMaterialModalContent>
		</Modal>
	);
};
CreateEditMaterialModalUnstyled.displayName = 'CreateEditMaterialModalUnstyled';

export const CreateEditMaterialModal = styled(CreateEditMaterialModalUnstyled)(
	cssCreateEditMaterialModal,
);
