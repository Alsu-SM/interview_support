import { format } from 'date-fns';
import { IDateFormat, ISeriesItem } from './types';

export function getCategoryBySeries(
	series: ISeriesItem[],
	dateFormat: IDateFormat = IDateFormat.DayMonth,
): string[] {
	const days = new Set<Date>();

	series.forEach((seriesItem) => {
		seriesItem.data.forEach((data) => {
			days.add(data.date);
		});
	});

	return Array.from(days).map((date) => format(date, dateFormat));
}
