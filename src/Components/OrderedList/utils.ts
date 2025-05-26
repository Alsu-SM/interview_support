import { itemKey } from './constants';
import {
	IGetItemDataParams,
	IItem,
	IItemData,
	IItemEntry,
	IItemPosition,
} from './types';

export function getItemData({
	item,
	index,
	instanceId,
}: IGetItemDataParams): IItemData {
	return {
		[itemKey]: true,
		item,
		index,
		instanceId,
	};
}

export function getItemRegistry() {
	const registry = new Map<string, HTMLElement>();

	function register({ itemId, element }: IItemEntry) {
		registry.set(itemId, element);

		return function unregister() {
			registry.delete(itemId);
		};
	}

	function getElement(itemId: string): HTMLElement | null {
		return registry.get(itemId) ?? null;
	}

	return { register, getElement };
}

export function isItemData(
	data: Record<string | symbol, unknown>,
): data is IItemData {
	return data[itemKey] === true;
}

export function getItemPosition({
	index,
	items,
}: {
	index: number;
	items: IItem[];
}): IItemPosition {
	if (items.length === 1) {
		return 'only';
	}

	if (index === 0) {
		return 'first';
	}

	if (index === items.length - 1) {
		return 'last';
	}

	return 'middle';
}
