import { IUseLineChartParams } from './types';
import { getCategoryBySeries } from './utils';
import styles from './LineChart.module.css';
import { useTheme } from '@emotion/react';

function useLineChart({ series, title, dateFormat }: IUseLineChartParams) {
	const theme = useTheme();

	const category = getCategoryBySeries(series, dateFormat);
	const hasData = series.reduce(
		(value, item) => (value ||= item.data.length > 0),
		false,
	);

	const seriesList = series.map((seriesItem) => {
		return {
			type: 'line',
			name: seriesItem.name,
			color: theme.bg.accent,
			emphasis: {
				itemStyle: {
					opacity: 0.8,
				},
				areaStyle: {
					opacity: 0.6,
				},
			},
			smooth: true,
			itemStyle: {
				color: seriesItem.lineColor,
				opacity: 0.6,
			},
			areaStyle: {
				color: seriesItem.fillColor,
				opacity: 0.2,
			},
			data: seriesItem.data,
			label: {
				show: false,
			},
			z: seriesItem.z,
		};
	});

	const options = {
		title: {
			text: title,
			left: 'center',
			top: 10,
			padding: 0,
			textStyle: {
				color: theme.text.primary,
				fontFamily: 'Comfortaa',
				fontSize: theme.spacing(9),
				fontWeight: '500',
				marginBottom: -20,
			},
		},
		tooltip: {
			trigger: 'axis',
			textStyle: {
				fontFamily: 'Comfortaa',
			},
			axisPointer: {
				type: 'none',
			},
			className: styles.tooltip,
		},
		grid: {
			containLabel: true,
			left: 0,
			right: 15,
			top: !!title ? 40 : 0,
			bottom: 0,
		},
		yAxis: {
			type: 'value',
			axisLabel: {
				color: theme.text.secondary,
				fontFamily: 'Comfortaa',
				fontSize: '12',
				show: true,
			},
			splitLine: {
				show: false,
			},
			axisLine: {
				show: true,
				lineStyle: {
					color: theme.text.tertiary,
					type: 'dashed',
				},
			},
			axisTick: {
				show: false,
			},
		},
		xAxis: {
			type: 'category',
			data: category,
			boundaryGap: false,
			axisLabel: {
				color: theme.text.secondary,
				fontFamily: 'Comfortaa',
				fontSize: '12',
				show: true,
			},
			splitLine: {
				show: false,
			},
			axisLine: {
				show: true,
				lineStyle: {
					color: theme.text.tertiary,
					type: 'dashed',
				},
			},
			axisTick: {
				show: false,
			},
		},
		series: seriesList,
	};

	return { options, hasData };
}

export default useLineChart;
