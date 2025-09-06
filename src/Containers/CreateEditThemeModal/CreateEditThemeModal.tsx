import { FC } from 'react';
import styled from '@emotion/styled';

import { useCreateEditThemeModal } from './hooks';
import { IComponentBaseProps } from '../../types';
import Modal from '../../Components/Modal/Modal';
import { CreateEditThemeModalContent } from './styled';
import { Field } from '../../Components/Field';

const CreateEditThemeModalUnstyled: FC<IComponentBaseProps> = ({
	className,
}) => {
	const { open, buttons, inputProps, textareaProps, title, handleClose } =
		useCreateEditThemeModal();

	return (
		<Modal
			open={open}
			onClose={handleClose}
			title={title}
			className={className}
			buttons={buttons}
		>
			<CreateEditThemeModalContent>
				<Field label={'Theme Name'} type="input" required props={inputProps} />
				<Field
					label={'Theme Description'}
					type="textarea"
					props={textareaProps}
				/>
			</CreateEditThemeModalContent>
		</Modal>
	);
};
CreateEditThemeModalUnstyled.displayName = 'CreateEditThemeModalUnstyled';

export const CreateEditThemeModal = styled(CreateEditThemeModalUnstyled)(``);
