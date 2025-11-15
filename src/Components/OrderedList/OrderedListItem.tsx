import { FC } from 'react';
import { IOrderedListItemProps } from './types';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { OrderedListItemWrapper } from './styled';

const OrderedListItem: FC<IOrderedListItemProps> = ({ item }) => {
	const { attributes, listeners, setNodeRef, transform, transition } =
		useSortable({ id: item.id });

	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
	};

	return (
		<OrderedListItemWrapper
			ref={setNodeRef}
			style={style}
			{...attributes}
			{...listeners}
			tabIndex={-1}
		>
			{item.element}
		</OrderedListItemWrapper>
	);
};

export default OrderedListItem;
