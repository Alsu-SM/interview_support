import { IInputProps } from '../Input';
import { renderTag } from '../Tag/utils';
import { ITagsInputProps } from './types';

export const useTagsInput = ({
	tags,
	inputValue,
	onTagsListChange,
	onInputChange,
}: Pick<
	ITagsInputProps,
	'tags' | 'inputValue' | 'onTagsListChange' | 'onInputChange'
>) => {
	const handleDeleteTag = (tag: string) => {
		onTagsListChange?.(tags.filter((currentTag) => currentTag !== tag));
	};

	const handleInputKeyDown: IInputProps['onKeyDown'] = (event) => {
		if (event.code === 'Enter') {
			const tagsToAdd = inputValue.split(',').map((value) => value.trim());
			const newTags = tags.slice();
			tagsToAdd.forEach((tag) => {
				if (!!tag && !newTags.includes(tag)) {
					newTags.push(tag);
				}
			});

			onTagsListChange?.(newTags);
			onInputChange?.('');
		}
	};

	const handleInputChange: IInputProps['onChange'] = (event) => {
		onInputChange?.(event.target.value);
	};

	const tagsList = tags.map((tag) =>
		renderTag({
			label: tag,
			allowDelete: true,
			onDelete: () => {
				handleDeleteTag(tag);
			},
		}),
	);

	return { tagsList, handleInputKeyDown, handleInputChange };
};
