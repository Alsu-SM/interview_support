import styled from '@emotion/styled';
import ReactEcharts from 'echarts-for-react';

export const NoDataMessage = styled('div')(({ theme }) => ({
	width: '100%',
	background: theme.bg.secondary,
	borderRadius: theme.spacing(10),
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	fontWeight: 300,
	height: theme.spacing(150),
	padding: theme.spacing(5),
	boxSizing: 'border-box',
}));

export const Title = styled('div')(({ theme }) => ({
	fontSize: theme.spacing(12),
	color: theme.text.secondary,
}));

export const Message = styled('div')(({ theme }) => ({
	fontSize: theme.spacing(18),
	flex: 1,
	display: 'flex',
	alignItems: 'center',
}));

export const LineChartEcharts = styled(ReactEcharts)(({ theme }) => [
	{
		height: theme.spacing(150),
		background: theme.bg.primary,
		borderRadius: theme.spacing(4),
		padding: theme.spacing(5),
		boxSizing: 'border-box',
	},
]);
