import { useTabs } from './hooks';
import { TabsContent, TabsList } from './styled';
import { cssTabs } from './styles';
import { ITabsProps } from './types';
import styled from '@emotion/styled';

const TabsUnstyled = ({
	selectedId,
	items,
	defaultSelectedId,
	onChange,
	...restProps
}: ITabsProps) => {
	const { tabsItems, content } = useTabs({
		items,
		selectedId,
		defaultSelectedId,
		onChange,
	});

	return (
		<div {...restProps}>
			<TabsList>{tabsItems}</TabsList>
			<TabsContent>{content}</TabsContent>
		</div>
	);
};

TabsUnstyled.displayName = 'TabsUnstyled';

export const Tabs = styled(TabsUnstyled)(cssTabs);
