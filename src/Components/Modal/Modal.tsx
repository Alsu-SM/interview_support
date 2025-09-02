import { useRef } from 'react';
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
import { useOutsideClick } from '../../Utils';

const ModalUnstyled = ({
	title,
	children,
	open,
	buttons,
	onClose,
	...restProps
}: IModalProps) => {
	const ref = useRef<HTMLDivElement>(null);

	useOutsideClick({ ref, callback: () => onClose?.() });

	if (!open) {
		return null;
	}

	return (
		<>
			<ModalOverlay />
			<div {...restProps} ref={ref} autoFocus>
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
