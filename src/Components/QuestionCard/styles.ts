import { createCSSFunction } from '../../Utils/createCSSFunction';
import { QuestionCardMessage, QuestionCardRow } from './styled';

export const cssQuestionCard = createCSSFunction(({ theme }) => ({
	background: theme.bg.soft,
	border: 'none',
	padding: theme.spacing(2, 3),
	margin: '0',
	borderRadius: theme.spacing(2),
	width: '100%',
	height: theme.spacing(25),
	boxSizing: 'border-box',
	display: 'flex',
	flexDirection: 'column',
	gap: theme.spacing(2),
	fontSize: theme.spacing(3.5),
	boxShadow: theme.boxShadow,
	justifyContent: 'space-between',
	[`&:hover, &:focus`]: {
		background: theme.bg.base,
		cursor: 'pointer',
		[String(QuestionCardMessage)]: {
			display: 'initial',
		},
		[String(QuestionCardRow)]: {
			display: 'none',
		},
	},
}));
