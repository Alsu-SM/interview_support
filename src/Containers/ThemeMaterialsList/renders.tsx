import { IOrderedListProps } from '../../Components/OrderedList/types';
import { MaterialCard } from '../../Components/MaterialCard';
import { IMaterial } from '../../Store';

export const renderMaterial = (
	material: IMaterial,
): IOrderedListProps['items'][number] => {
	return {
		id: material.id,
		element: (
			<MaterialCard material={material} key={material.id} id={material.id} />
		),
	};
};
