import styled from '@emotion/styled';
import { cssScrollbar } from '../../Utils/scrollbar';

export const StatisticsContent = styled('div')(({ theme }) => [
	{
		display: 'flex',
		flexDirection: 'column',
		gap: theme.spacing(20),
		background: theme.bg.secondary,
		padding: theme.spacing(14),
		borderRadius: theme.spacing(10),
		boxShadow: theme.boxShadow.primary,
		backdropFilter: theme.filter.blur.primary,
		flex: 1,
		overflow: 'auto',
	},
	cssScrollbar({ theme, inverse: true }),
]);

export const StatisticsSummaryRow = styled('div')(({ theme }) => ({
	display: 'grid',
	gap: theme.spacing(15),
	overflow: 'hidden auto',
	gridTemplateColumns: `repeat(auto-fit, minmax(300px, 1fr))`,
	gridAutoRows: 'min-content',
	minHeight: 'fit-content',
}));

export const ChartsSummaryRow = styled('div')(({ theme }) => ({
	display: 'grid',
	gap: theme.spacing(15),
	overflow: 'hidden auto',
	gridTemplateColumns: `repeat(auto-fit, minmax(400px, 1fr))`,
	gridAutoRows: 'min-content',
	minHeight: 'fit-content',
}));

export const HistorySummaryRow = styled('div')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	gap: theme.spacing(20),
	background: theme.bg.primary,
	padding: theme.spacing(14),
	borderRadius: theme.spacing(10),
	boxShadow: theme.boxShadow.primary,
	backdropFilter: theme.filter.blur.primary,
	overflow: 'auto',
	flex: 1,
	minHeight: theme.spacing(200),
}));

export const HistoryList = styled('div')(({ theme }) => [
	{
		display: 'flex',
		flexDirection: 'column',
		gap: theme.spacing(10),
		flex: 1,
		overflow: 'auto',
	},
	cssScrollbar({ theme, inverse: true }),
]);

export const HistoryListItem = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	gap: theme.spacing(4),
	background: theme.bg.secondary,
	padding: theme.spacing(8),
	borderRadius: theme.spacing(4),
	overflow: 'hidden',
	flexShrink: 0,
}));

export const HistoryListItemLeft = styled('div')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	gap: theme.spacing(4),
}));

export const HistoryTitle = styled('div')(({ theme }) => ({
	fontSize: theme.spacing(10),
}));

export const HistoryListItemTitle = styled('div')(({ theme }) => ({
	fontSize: theme.spacing(8),
}));

export const HistoryListItemSubTitle = styled('div')(({ theme }) => ({
	fontSize: theme.spacing(6),
	color: theme.text.secondary,
}));
