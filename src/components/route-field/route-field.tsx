import './route-field.scss';

type Props = {
	onAddNewRoute: (evt: React.FormEvent<HTMLFormElement>) => void,
	setNewValue: (evt: React.ChangeEvent<HTMLInputElement>) => void,
	value: string
};

const RouteField = ({ onAddNewRoute, setNewValue, value }: Props) => {
	return (
		<form onSubmit={onAddNewRoute}>
			<input type="text"
							className="route-field" 
							placeholder="Имя маршрута"
							onChange={setNewValue}
							value={value}
							required
			/>
		</form>
	);
};

export default RouteField;