import './route-point-list.scss';

type Props = {
	children: any
};

const RoutePointList = ({ children, ...props }: Props) => {

	return (
		<ul className="route-point-list" {...props}>
			{children}
		</ul>
	);
};

export default RoutePointList;