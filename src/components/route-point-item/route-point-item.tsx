import './route-point-item.scss';

type Props = {
	pointName: string,
	children?: React.ReactElement
};

const RoutePointItem = ({ pointName, children, ...props }: Props) => {
	return (
		<li className="route-point-item" {...props}>
			{pointName}
			{children}
		</li>
	);
};

export default RoutePointItem;