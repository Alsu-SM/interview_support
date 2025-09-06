import { Input } from '../Input';
import { useTagsInput } from './hooks';
import { TagsList } from './styled';
import { cssTagsInput } from './styles';
import { ITagsInputProps } from './types';
import styled from '@emotion/styled';

const TagsInputUnstyled = ({
	tags,
	inputValue,
	onInputChange,
	onTagsListChange,
	...restProps
}: ITagsInputProps) => {
	const { tagsList, handleInputKeyDown, handleInputChange } = useTagsInput({
		tags,
		inputValue,
		onTagsListChange,
		onInputChange,
	});

	return (
		<div {...restProps}>
			<Input
				placeholder="Enter tags (comma-separated) and press Enter... "
				value={inputValue}
				onChange={handleInputChange}
				onKeyDown={handleInputKeyDown}
			/>
			<TagsList>{tagsList}</TagsList>
		</div>
	);
};

TagsInputUnstyled.displayName = 'TagsInputUnstyled';

export const TagsInput = styled(TagsInputUnstyled)(cssTagsInput);
