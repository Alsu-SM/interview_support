import styled from '@emotion/styled';
import { Textarea } from '../../Components/Textarea';

export const CreateThemeModalTextarea = styled(Textarea)(({ theme }) => ({
	resize: 'vertical',
	maxHeight: theme.spacing(100),
	minHeight: theme.spacing(40),
}));
