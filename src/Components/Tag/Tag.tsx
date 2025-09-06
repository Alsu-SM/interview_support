import ButtonIcon from '../ButtonIcon/ButtonIcon';
import { IconClose } from '../Icons';
import { cssTag } from './styles';
import { ITagProps } from './types';
import styled from '@emotion/styled';

const TagUnstyled = ({
	label,
	allowDelete,
	onDelete,
	...restProps
}: ITagProps) => {
	return (
		<div {...restProps}>
			{label}{' '}
			{allowDelete && (
				<ButtonIcon danger icon={<IconClose />} onClick={onDelete} />
			)}
		</div>
	);
};

TagUnstyled.displayName = 'TagUnstyled';

export const Tag = styled(TagUnstyled)(cssTag);
