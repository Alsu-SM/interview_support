import { FC } from 'react';
import styled from '@emotion/styled';

import { useDeleteModal } from './hooks';
import { IComponentBaseProps } from '../../types';
import Modal from '../../Components/Modal/Modal';
import { cssDeleteModal } from './styles';

const DeleteModalUnstyled: FC<IComponentBaseProps> = ({ className }) => {
	const { open, buttons, title, message, handleClose } = useDeleteModal();

	return (
		<Modal
			open={open}
			onClose={handleClose}
			title={title}
			className={className}
			buttons={buttons}
		>
			{message}
		</Modal>
	);
};
DeleteModalUnstyled.displayName = 'DeleteModalUnstyled';

export const DeleteModal = styled(DeleteModalUnstyled)(cssDeleteModal);
