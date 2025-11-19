import {
	SummaryCardIconWrapper,
	SummaryCardSubtitle,
	SummaryCardTitle,
	SummaryCardValue,
} from './styled';
import { cssSummaryCard } from './styles';
import { ISummaryCardProps } from './types';
import styled from '@emotion/styled';

const SummaryCardUnstyled = ({
	title,
	value,
	icon,
	subtitle,
	...restProps
}: ISummaryCardProps) => {
	return (
		<div {...restProps}>
			<SummaryCardTitle>{title}</SummaryCardTitle>
			<SummaryCardValue>{value}</SummaryCardValue>
			{subtitle && <SummaryCardSubtitle>{subtitle}</SummaryCardSubtitle>}
			<SummaryCardIconWrapper>{icon}</SummaryCardIconWrapper>
		</div>
	);
};

SummaryCardUnstyled.displayName = 'SummaryCardUnstyled';

export const SummaryCard = styled(SummaryCardUnstyled)(cssSummaryCard);
