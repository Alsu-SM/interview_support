import { FC } from 'react';
import { IOrderedListItemProps } from './types';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const OrderedListItem: FC<IOrderedListItemProps> = ({ item }) => {
	const { attributes, listeners, setNodeRef, transform, transition } =
		useSortable({ id: item.id });

	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
	};

	return (
		<div ref={setNodeRef} style={style} {...attributes} {...listeners}>
			{item.element}
		</div>
	);
};

export default OrderedListItem;
