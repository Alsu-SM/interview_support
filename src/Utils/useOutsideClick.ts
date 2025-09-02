import { RefObject, useEffect } from 'react';

export const useOutsideClick = ({
	ref,
	callback,
}: {
	ref: RefObject<HTMLElement>;
	callback: () => void;
}) => {
	useEffect(() => {
		const handleClickOutside: Parameters<
			typeof document.addEventListener<'mousedown' | 'touchstart'>
		>[1] = (event) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				callback();
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		document.addEventListener('touchstart', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
			document.removeEventListener('touchstart', handleClickOutside);
		};
	}, [ref, callback]);
};
