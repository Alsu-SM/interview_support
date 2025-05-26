import React, { ReactNode } from 'react';

export type IItem = {
	id: string;
	element: ReactNode;
};

export interface IOrderedListProps {
	items: IItem[];
	onReorder: (items: IItem[]) => void;
	className?: string;
	style?: React.CSSProperties;
}

export interface IOrderedListItemProps {
	item: IItem;
}
