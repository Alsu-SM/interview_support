import { FC } from 'react';
import { IProgressProps } from './types';
import styled from '@emotion/styled';
import { cssProgress } from './styles';
import { ProgressValue } from './styled';

const ProgressUnstyled: FC<IProgressProps> = ({ className, value }) => {
	return (
		<div className={className}>
			<ProgressValue style={{ width: `${Math.min(100, value)}%` }} />
		</div>
	);
};
ProgressUnstyled.displayName = 'ProgressUnstyled';

export const Progress = styled(ProgressUnstyled)(cssProgress);
