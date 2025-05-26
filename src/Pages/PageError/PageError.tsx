import { useRouteError } from 'react-router-dom';

import { DefaultRouterError } from './types';
import { FC } from 'react';
import { ComponentPropsBase } from '../../types';
import styled from '@emotion/styled';
import { cssPage } from '../styles';

const PageErrorUnstyled: FC<ComponentPropsBase> = ({ className }) => {
	const routerError: DefaultRouterError = useRouteError() as DefaultRouterError;

	return (
		<div className={className}>
			<h3>Произошла ошибка</h3>
			<p>
				<i>{routerError.statusText || routerError.message}</i>
			</p>
		</div>
	);
};
PageErrorUnstyled.displayName = 'PageErrorUnstyled';

const PageError = styled(PageErrorUnstyled)(cssPage);

export default PageError;
