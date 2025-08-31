import { Tag } from '../../Components/Tag';

export const renderTag = (tag: string) => {
	return <Tag key={tag} label={`#${tag}`} />;
};
