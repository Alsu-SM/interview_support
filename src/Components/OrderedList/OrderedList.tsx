import { IOrderedListProps } from './types';

import {
	closestCenter,
	DndContext,
	KeyboardSensor,
	PointerSensor,
	UniqueIdentifier,
	useSensor,
	useSensors,
} from '@dnd-kit/core';
import {
	arrayMove,
	rectSortingStrategy,
	SortableContext,
	sortableKeyboardCoordinates,
} from '@dnd-kit/sortable';
import { Props } from '@dnd-kit/core/dist/components/DndContext/DndContext';
import OrderedListItem from './OrderedListItem';

function OrderedList({ items, onReorder }: IOrderedListProps) {
	const handleDragEnd: Props['onDragEnd'] = (event) => {
		console.log(event);
		const { active, over } = event;
		console.log(active, over);
		if (active === null || over === null) {
			return;
		}

		if (active.id !== over.id) {
			const oldIndex = items
				.map(({ id }) => id as UniqueIdentifier)
				.indexOf(active.id);
			const newIndex = items
				.map(({ id }) => id as UniqueIdentifier)
				.indexOf(over.id);

			const newItems = arrayMove(items, oldIndex, newIndex);
			onReorder(newItems);
		}
	};

	const sensors = useSensors(
		useSensor(PointerSensor, {
			activationConstraint: {
				distance: 10,
			},
		}),
		useSensor(KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates,
		}),
	);

	return (
		<DndContext
			sensors={sensors}
			collisionDetection={closestCenter}
			onDragEnd={handleDragEnd}
		>
			<SortableContext
				items={items.map((id) => id)}
				strategy={rectSortingStrategy}
			>
				{items.map((item) => (
					<OrderedListItem key={item.id} item={item} />
				))}
			</SortableContext>
		</DndContext>
	);
}

export default OrderedList;
