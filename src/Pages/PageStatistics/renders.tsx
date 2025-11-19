import { format } from 'date-fns';
import { IHistoryResult, IHistoryStatistics, IHistoryType } from '../../Store';
import {
	HistoryListItem,
	HistoryListItemLeft,
	HistoryListItemSubTitle,
	HistoryListItemTitle,
} from './styled';
import { Tag } from '../../Components/Tag';

export const renderHistoryItem = (item: IHistoryStatistics) => {
	if (item.type === IHistoryType.Read) {
		const subTitle = item.themeTitle
			? `${item.themeTitle} • Material • ${format(
					item.date,
					'dd.MM.yyyy HH:mm',
				)}`
			: `Material • ${format(item.date, 'dd.MM.yyyy HH:mm')}`;

		return (
			<HistoryListItem key={item.id}>
				<HistoryListItemLeft>
					<HistoryListItemTitle>{item.material.title}</HistoryListItemTitle>
					<HistoryListItemSubTitle>{subTitle}</HistoryListItemSubTitle>
				</HistoryListItemLeft>
				<Tag label={'read'} />
			</HistoryListItem>
		);
	}

	const subTitle = item.themeTitle
		? `${item.themeTitle} • Question • ${format(item.date, 'dd.MM.yyyy HH:mm')}`
		: `Material • ${format(item.date, 'dd.MM.yyyy HH:mm')}`;

	return (
		<HistoryListItem key={item.id}>
			<HistoryListItemLeft>
				<HistoryListItemTitle>{item.question.question}</HistoryListItemTitle>
				<HistoryListItemSubTitle>{subTitle}</HistoryListItemSubTitle>
			</HistoryListItemLeft>
			<Tag
				label={item.result}
				success={item.result === IHistoryResult.Easy}
				warning={item.result === IHistoryResult.Medium}
				danger={item.result === IHistoryResult.Hard}
			/>
		</HistoryListItem>
	);
};
