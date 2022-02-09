import Button from '../../common/button';

type Props = {
	onButtonClick: (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
};

const DeletePointButton = ({ onButtonClick }: Props) => {
	return (
		<Button type="delete"
						label="Удалить маршрут"
						onButtonClick={onButtonClick}
		/>
	);
};

export default DeletePointButton;