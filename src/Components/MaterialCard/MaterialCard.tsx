import { FC } from 'react';
import { IMaterialCardProps } from './types';
import styled from '@emotion/styled';
import {
	MaterialCardButtonsWrapper,
	MaterialCardLabel,
	MaterialCardRow,
	MaterialCardValue,
	MaterialTagsList,
} from './styled';
import { useMaterialCard } from './hooks';
import { Card } from '../Card';
import { cssMaterialCard } from './styles';
import ButtonIcon from '../ButtonIcon/ButtonIcon';
import { IconDelete, IconEdit } from '../Icons';
import { Tag } from '../Tag';

const MaterialCardUnstyled: FC<IMaterialCardProps> = ({
	id,
	material,
	className,
}) => {
	const {
		tags,
		lastReadLabel,
		lastReadStatus,
		handleClick,
		handleEdit,
		handleDelete,
	} = useMaterialCard({
		material,
	});

	return (
		<Card className={className} onClick={handleClick} id={id} key={id}>
			<MaterialCardButtonsWrapper>
				<ButtonIcon icon={<IconEdit />} onClick={handleEdit} />
				<ButtonIcon icon={<IconDelete />} danger onClick={handleDelete} />
			</MaterialCardButtonsWrapper>
			<MaterialCardRow>
				<MaterialCardLabel>Material:</MaterialCardLabel>
				<MaterialCardValue title={material.title}>
					{material.title}
				</MaterialCardValue>
			</MaterialCardRow>
			<MaterialCardRow>
				<MaterialCardLabel>Tags:</MaterialCardLabel>
				<MaterialCardValue>
					{tags.length ? <MaterialTagsList>{tags}</MaterialTagsList> : '-'}
				</MaterialCardValue>
			</MaterialCardRow>
			{lastReadLabel && (
				<MaterialCardRow>
					<Tag label={lastReadLabel} {...lastReadStatus} />
				</MaterialCardRow>
			)}
		</Card>
	);
};
MaterialCardUnstyled.displayName = 'MaterialCardUnstyled';

export const MaterialCard = styled(MaterialCardUnstyled)(cssMaterialCard);
