import { FC } from 'react';
import styled from '@emotion/styled';

import { useCreateThemeModal } from './hooks';
import { IComponentBaseProps } from '../../types';
import Modal from '../../Components/Modal/Modal';
import { Input } from '../../Components/Input';
import { CreateThemeModalTextarea } from './styled';

const CreateThemeModalUnstyled: FC<IComponentBaseProps> = ({ className }) => {
	const { open, buttons, handleClose } = useCreateThemeModal();

	return (
		<Modal
			open={open}
			onClose={handleClose}
			title="Create New Theme"
			className={className}
			buttons={buttons}
		>
			<Input placeholder="e.g. React Fundamentals..." />
			<CreateThemeModalTextarea placeholder="Brief description of this theme..." />
		</Modal>
	);
};
CreateThemeModalUnstyled.displayName = 'CreateThemeModalUnstyled';

export const CreateThemeModal = styled(CreateThemeModalUnstyled)(``);
