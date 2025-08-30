import { FC } from 'react';
import styled from '@emotion/styled';

import { useCreateThemeModal } from './hooks';
import { IComponentBaseProps } from '../../types';
import Modal from '../../Components/Modal/Modal';
import { CreateThemeModalContent } from './styled';
import { Field } from '../../Components/Field';

const CreateThemeModalUnstyled: FC<IComponentBaseProps> = ({ className }) => {
	const { open, buttons, inputProps, textareaProps, handleClose } =
		useCreateThemeModal();

	return (
		<Modal
			open={open}
			onClose={handleClose}
			title="Create New Theme"
			className={className}
			buttons={buttons}
		>
			<CreateThemeModalContent>
				<Field label={'Theme Name'} type="input" required props={inputProps} />
				<Field
					label={'Theme Description'}
					type="textarea"
					props={textareaProps}
				/>
			</CreateThemeModalContent>
		</Modal>
	);
};
CreateThemeModalUnstyled.displayName = 'CreateThemeModalUnstyled';

export const CreateThemeModal = styled(CreateThemeModalUnstyled)(``);
