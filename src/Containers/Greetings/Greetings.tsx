import { FC } from 'react';
import styled from '@emotion/styled';
import { cssGreetings } from './styles';

import { useGreetings } from './hooks';
import { IComponentBaseProps } from '../../types';

const GreetingsUnstyled: FC<IComponentBaseProps> = ({ className }) => {
	const { greetings } = useGreetings();

	return <div className={className}>{greetings}</div>;
};
GreetingsUnstyled.displayName = 'GreetingsUnstyled';

export const Greetings = styled(GreetingsUnstyled)(cssGreetings);
