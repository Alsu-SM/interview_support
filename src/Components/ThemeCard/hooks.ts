import { ComponentProps } from 'react';
import { useNavigate } from 'react-router-dom';
import { ITheme } from '../../Store';

export const useThemeCard = ({ theme }: { theme: ITheme }) => {
	const navigate = useNavigate();

	const handleClick: ComponentProps<'button'>['onClick'] = () => {
		navigate(`/interview_support/theme/${theme.id}`);
	};

	return { handleClick };
};
