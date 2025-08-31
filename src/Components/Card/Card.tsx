import { CardWrapper } from './styled';
import { cssCard } from './styles';
import { ICardProps } from './types';
import styled from '@emotion/styled';

const CardUnstyled = ({ children, ...restProps }: ICardProps) => {
	return (
		<button type="button" {...restProps}>
			<CardWrapper>{children}</CardWrapper>
		</button>
	);
};

CardUnstyled.displayName = 'CardUnstyled';

export const Card = styled(CardUnstyled)(cssCard);
