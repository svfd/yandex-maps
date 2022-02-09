import Button from '../../common/button';

import openPopupButtonIcon from './open-popup-icon.svg';

type Props = {
	onButtonClick: (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
};

const OpenPopupButton = ({ onButtonClick }: Props) => {
	return (
		<Button type="open"
						label="Показать список маршрутов"
						onButtonClick={onButtonClick}
						position="fixed"
						top="50%"
						left="10px"
						transformX="-50%">
				<img src={openPopupButtonIcon} alt="list icon" />
		</Button>
	);
};

export default OpenPopupButton;