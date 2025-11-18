import { TabsItem } from './styled';
import { ITabsItem, ITabsProps } from './types';

export const renderTabsItem = ({
	item,
	selectedId,
	onChange,
}: {
	item: ITabsItem;
	onChange: ITabsProps['onChange'];
	selectedId: ITabsProps['selectedId'];
}) => (
	<TabsItem
		key={item.id}
		selected={selectedId === item.id}
		onClick={() => {
			onChange?.(item.id);
		}}
	>
		{item.label}
	</TabsItem>
);
