import { ILineChartProps } from './types';
import styled from '@emotion/styled';

import useLineChart from './hooks';
import { LineChartEcharts, Message, NoDataMessage, Title } from './styled';

const LineChartUnstyled = ({
	series,
	title = '',
	dateFormat,
	className,
}: ILineChartProps) => {
	const { options, hasData } = useLineChart({ series, title, dateFormat });

	if (!hasData) {
		return (
			<NoDataMessage>
				<Title>{title}</Title>
				<Message>No data</Message>
			</NoDataMessage>
		);
	}
	return (
		<LineChartEcharts
			option={options}
			style={{ width: '100%', wordBreak: 'keep-all' }}
			className={className}
		/>
	);
};
LineChartUnstyled.displayName = 'LineChartUnstyled';

export const LineChart = styled(LineChartUnstyled)(``);
