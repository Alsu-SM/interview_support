import styled from '@emotion/styled';

export const TagsList = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	flexWrap: 'wrap',
	gap: theme.spacing(4),
}));
