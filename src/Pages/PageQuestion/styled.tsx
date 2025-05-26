import styled from '@emotion/styled';

export const QuestionTitle = styled('div')(({ theme }) => ({
	fontSize: theme.spacing(10),
}));
export const QuestionDescription = styled('div')(({ theme }) => ({
	fontSize: theme.spacing(8),
	color: theme.text.soft,
}));

export const QuestionTitleGroup = styled('div')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	gap: theme.spacing(4),
}));
