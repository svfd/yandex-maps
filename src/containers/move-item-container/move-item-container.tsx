import { connect } from 'react-redux';

import { setCurrentRoute, changeRouteOrder } from '../../store/actions';
import { RootState } from '../../store';

import MoveItem from '../../components/move-item';

import { RouteItemType } from '../../types/route-item-type';

type Props = {
	setCurrentRoute: (route: RouteItemType) => void,
	changeRouteOrder: (route: RouteItemType) => void,
	routes: RouteItemType[],
	children: JSX.Element | JSX.Element[]
}

export const MoveItemContainer = ({ setCurrentRoute, changeRouteOrder, routes, children, ...props }: Props) => {

	const getDraggableElement = (element: HTMLElement) => {
		const elementId: number = parseInt(element.id);

		return routes.findIndex((route) => route.id === elementId);
	};

	const setDraggableElement = (element: HTMLElement) => {
		const routeIdx = getDraggableElement(element);
		setCurrentRoute(routes[routeIdx]);
	};

	const onChangeRouteOrder = (element: HTMLElement) => {
		const routeIdx = getDraggableElement(element);
		changeRouteOrder(routes[routeIdx]);
	}

	return (
		<MoveItem moveStart={setDraggableElement}
							moveEnd={onChangeRouteOrder}
							{...props}
		>
			{children}
		</MoveItem>
	);
};

const mapStateToProps = ({ routeList }: RootState) => {
	const { routes }: {routes: RouteItemType[]} = routeList;
	return {routes};
};

const mapDispatchToProps = {
	setCurrentRoute,
	changeRouteOrder
};

export default connect(mapStateToProps, mapDispatchToProps)(MoveItemContainer);