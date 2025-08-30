import { Button } from '../Button';
import {
	ModalButtons,
	ModalChildren,
	ModalOverlay,
	ModalTitle,
} from './styled';
import { cssModal } from './styles';
import { IModalProps } from './types';
import styled from '@emotion/styled';

const ModalUnstyled = ({
	title,
	children,
	open,
	buttons,
	onClose,
	...restProps
}: IModalProps) => {
	if (!open) {
		return null;
	}

	return (
		<>
			<ModalOverlay />
			<div {...restProps}>
				{title && <ModalTitle>{title}</ModalTitle>}
				{children && <ModalChildren>{children}</ModalChildren>}
				{buttons && buttons.length > 0 && (
					<ModalButtons>
						{buttons.map((button) => (
							<Button {...button} />
						))}
					</ModalButtons>
				)}
			</div>
		</>
	);
};

ModalUnstyled.displayName = 'ModalUnstyled';

const Modal = styled(ModalUnstyled)(cssModal);

export default Modal;
