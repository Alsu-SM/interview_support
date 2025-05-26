import { FC } from 'react';
import { IInnerHTMLContentProps } from './types';
import { useInnerHTMLContent } from './hooks';

const InnerHTMLContent: FC<IInnerHTMLContentProps> = ({
	content,
	className,
}) => {
	const { ref } = useInnerHTMLContent({ content });

	return <div ref={ref} className={className} />;
};

InnerHTMLContent.displayName = 'InnerHTMLContent';

export default InnerHTMLContent;
