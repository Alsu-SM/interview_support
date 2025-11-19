import styled from '@emotion/styled';
import { FC } from 'react';
import { IComponentBaseProps } from '../../types';
import { cssPage } from '../styles';
import { Navbar } from '../../Containers/Navbar';
import {
	ChartsSummaryRow,
	HistoryList,
	HistorySummaryRow,
	HistoryTitle,
	StatisticsContent,
	StatisticsSummaryRow,
} from './styled';
import { usePageStatistics } from './hooks';
import { SummaryCard } from '../../Components/SummaryCard';
import {
	IconBookOpen,
	IconBulb,
	IconLineChart,
	IconRocket,
	IconSchool,
	IconShine,
} from '../../Components/Icons';
import { LineChart } from '../../Components/LineChart';

const PageStatisticsUnstyled: FC<IComponentBaseProps> = ({ className }) => {
	const { statistics, historyItems } = usePageStatistics();

	return (
		<div className={className}>
			<Navbar />
			<StatisticsContent>
				<StatisticsSummaryRow>
					<SummaryCard
						title="Total Themes"
						icon={<IconSchool />}
						value={String(statistics.totalThemes)}
					/>
					<SummaryCard
						title="Total Questions"
						icon={<IconShine />}
						value={String(statistics.totalQuestions)}
					/>
					<SummaryCard
						title="Total Materials"
						icon={<IconBookOpen />}
						value={String(statistics.totalMaterials)}
					/>
					<SummaryCard
						title="Total Study Sessions"
						icon={<IconRocket />}
						value={String(statistics.totalStudySessions)}
					/>
					<SummaryCard
						title="Total Materials Read"
						icon={<IconBulb />}
						value={String(statistics.totalMaterialsRead)}
					/>
					<SummaryCard
						title="Overall Mastery"
						icon={<IconLineChart />}
						value={`${String(statistics.overallMastery)}%`}
					/>
				</StatisticsSummaryRow>
				<ChartsSummaryRow>
					<LineChart
						title="Questions Studied (Last 30 Days)"
						series={[
							{
								name: 'Questions Studied',
								data: statistics.studiedQuestionsSeries,
							},
						]}
					/>
					<LineChart
						title="Materials Read (Last 30 Days)"
						series={[
							{
								name: 'Materials Read',
								data: statistics.readMaterialsSeries,
							},
						]}
					/>
					<LineChart
						title="Mastery % (Last 30 Days)"
						series={[
							{
								name: 'Overall Mastery',
								data: statistics.masterySeries,
							},
						]}
					/>
				</ChartsSummaryRow>
				<HistorySummaryRow>
					<HistoryTitle>Recent activity</HistoryTitle>
					<HistoryList>{historyItems}</HistoryList>
				</HistorySummaryRow>
			</StatisticsContent>
		</div>
	);
};

PageStatisticsUnstyled.displayName = 'PageStatisticsUnstyled';

const PageStatistics = styled(PageStatisticsUnstyled)(cssPage);
export default PageStatistics;
