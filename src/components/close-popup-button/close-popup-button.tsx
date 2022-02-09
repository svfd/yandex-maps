import Button from '../../common/button';

type Props = {
	onButtonClick: (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
};

const ClosePopupButton = ({ onButtonClick, ...props }: Props) => {
	return (
		<Button type="close"
						label="Закрыть список маршрутов"
						onButtonClick={onButtonClick}
						{...props}
		/>
	);
};

export default ClosePopupButton;