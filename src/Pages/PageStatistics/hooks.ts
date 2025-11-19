import { useSelector } from 'react-redux';
import { IStoreType } from '../../Store/types';
import { getStatistics, IStatistics } from '../../Store';
import { renderHistoryItem } from './renders';

export const usePageStatistics = () => {
	const statistics = useSelector<IStoreType, IStatistics>(getStatistics);

	const historyItems = statistics.recentActivity.map((item) =>
		renderHistoryItem(item),
	);

	return { statistics, historyItems };
};
