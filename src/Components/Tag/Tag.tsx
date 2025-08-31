import { cssTag } from './styles';
import { ITagProps } from './types';
import styled from '@emotion/styled';

const TagUnstyled = ({ label, ...restProps }: ITagProps) => {
	return <div {...restProps}>{label}</div>;
};

TagUnstyled.displayName = 'TagUnstyled';

export const Tag = styled(TagUnstyled)(cssTag);
