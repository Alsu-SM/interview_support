import { useEffect, useRef } from 'react';
import { IInnerHTMLContentProps } from './types';

export const useInnerHTMLContent = ({
	content,
}: {
	content: IInnerHTMLContentProps['content'];
}) => {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (ref.current) {
			ref.current.innerHTML = content;
		}
	}, [content]);

	return { ref };
};
