import { Tag } from './Tag';
import { ITagProps } from './types';

export const renderTag = (restProps: ITagProps) => {
	return <Tag {...restProps} />;
};
