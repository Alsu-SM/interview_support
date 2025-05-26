import { FC } from 'react';
import styled from '@emotion/styled';
import { cssGreetings } from './styles';

import { useGreetings } from './hooks';
import { ComponentPropsBase } from '../../types';

const GreetingsUnstyled: FC<ComponentPropsBase> = ({ className }) => {
	const { greetings } = useGreetings();

	return <div className={className}>{greetings}</div>;
};
GreetingsUnstyled.displayName = 'GreetingsUnstyled';

export const Greetings = styled(GreetingsUnstyled)(cssGreetings);
