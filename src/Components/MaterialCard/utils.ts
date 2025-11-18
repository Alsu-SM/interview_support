import { isAfter, isSameDay, subDays } from 'date-fns';
import { ITagProps } from '../Tag';

export const getLastReadStatus = (
	date: Date | null,
): Pick<ITagProps, 'success' | 'warning' | 'danger'> => {
	if (!date) {
		return {};
	}
	if (isSameDay(date, new Date())) {
		return { success: true };
	}

	if (isAfter(date, subDays(new Date(), 5))) {
		return { warning: true };
	}

	return { danger: true };
};
