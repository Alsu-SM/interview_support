import { useState } from 'react';
import { ITabsProps } from './types';
import { renderTabsItem } from './renders';

export const useTabs = ({
	selectedId: selectedIdProp,
	defaultSelectedId,
	items,
	onChange,
}: Pick<
	ITabsProps,
	'selectedId' | 'defaultSelectedId' | 'onChange' | 'items'
>) => {
	const [selectedIdState, setSelectedIdState] = useState<
		ITabsProps['selectedId']
	>(defaultSelectedId ?? items.at(0)?.id ?? '');

	const selectedId =
		selectedIdProp === undefined ? selectedIdState : selectedIdProp;

	const handleItemClick: ITabsProps['onChange'] = (id) => {
		setSelectedIdState(id);
		onChange?.(id);
	};

	const tabsItems = items.map((item) =>
		renderTabsItem({ item, selectedId, onChange: handleItemClick }),
	);

	const content = items.find((item) => item.id === selectedId)?.content ?? null;

	return { tabsItems, content };
};
