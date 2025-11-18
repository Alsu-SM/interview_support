import styled from '@emotion/styled';
import { FC } from 'react';
import { IComponentBaseProps } from '../../types';
import { cssPage } from '../styles';
import { usePageMaterial } from './hooks';
import { PageWarningMessage } from '../styled';
import {
	MaterialContent,
	MaterialLabel,
	MaterialMDEditor,
	MaterialReadButton,
	MaterialTags,
	MaterialTitle,
	MaterialTitleGroup,
} from './styled';
import { Button } from '../../Components/Button';
import { IconArrowLeft, IconBookOpen } from '../../Components/Icons';
import { Navbar } from '../../Containers/Navbar';

const PageMaterialUnstyled: FC<IComponentBaseProps> = ({ className }) => {
	const {
		material,
		goBackTitle,
		tags,
		lastReadLabel,
		handleGoBack,
		handleRead,
	} = usePageMaterial();

	const backButton = (
		<Button plain onClick={handleGoBack}>
			<IconArrowLeft /> {goBackTitle}
		</Button>
	);

	if (!material) {
		return (
			<div className={className}>
				<Navbar />
				{backButton}
				<PageWarningMessage>No material found</PageWarningMessage>
			</div>
		);
	}

	return (
		<div className={className}>
			<Navbar />
			{backButton}
			<MaterialContent>
				<MaterialTitleGroup>
					<MaterialTitle>{material.title}</MaterialTitle>
					<MaterialTags>
						<MaterialLabel>Tags:</MaterialLabel>
						{tags.length > 0 ? tags : '-'}
					</MaterialTags>
				</MaterialTitleGroup>
				<MaterialMDEditor
					value={material.material}
					height="fit-content"
					visibleDragbar={false}
					preview="preview"
					hideToolbar
				/>
				<MaterialReadButton title={lastReadLabel} primary onClick={handleRead}>
					<IconBookOpen /> Прочитать
				</MaterialReadButton>
			</MaterialContent>
		</div>
	);
};

PageMaterialUnstyled.displayName = 'PageMaterialUnstyled';

const PageMaterial = styled(PageMaterialUnstyled)(cssPage);
export default PageMaterial;
