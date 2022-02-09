import type { BaseActionTypes } from '../action-types/base-action-types';
import type { RouteItemType } from '../../types/route-item-type';

import { RouteListActionTypes } from '../action-types/route-list-types';

type State = {
	routes: RouteItemType[],
	currentRoute: RouteItemType | null
};

type PayloadType = {
	routes?: RouteItemType[],
	currentRoute?: RouteItemType,
	route?: RouteItemType,
	id?: number
};

export type RouteListAction = BaseActionTypes<RouteListActionTypes, PayloadType>;

const updateRouteGeometry = (routes: RouteItemType[], updatedRoute: RouteItemType) => {

	return routes.map((route) => {

		if (route.id === updatedRoute.id) {
			return {...route, geometry: updatedRoute.geometry};
		}

		return route;
	});
};

const updateRouteOrder = (routes: RouteItemType[], currentRoute: RouteItemType, route: RouteItemType) => {

	return routes.map((r) => {

		if (r.id === route.id) {
			return {...r, order: currentRoute!.order};
		}

		if (r.id === currentRoute!.id) {
			return {...r, order: route.order};
		}

		return r;
	});
};

const removeRoute = (routes: RouteItemType[], id: number): RouteItemType[] => {
	return routes.filter((route) => route.id !== id);
};

const reducer = (state: State, action: RouteListAction): State => {

	if (state === undefined) {
		return {
			routes: [],
			currentRoute: null
		}
	}

	switch(action.type) {
		case RouteListActionTypes.ADD_POINT:
			return {
				...state,
				routes: [
					...state.routes,
					action.payload!.route!
				]
			};
		case RouteListActionTypes.SET_CURRENT_ROUTE:
			return {
				...state,
				currentRoute: action.payload!.route!
			};
		case RouteListActionTypes.CHANGE_POINT_ORDER:
			return {
				...state,
				routes: [
					...updateRouteOrder(state.routes, state.currentRoute!, action.payload!.route!)
				]
			};
		case RouteListActionTypes.UPDATE_POINT_GEOMETRY:
			return {
				...state,
				routes: [
					...updateRouteGeometry(state.routes, action.payload!.route!)
				]
			};
		case RouteListActionTypes.REMOVE_POINT:
			return {
				...state,
				routes: [
					...removeRoute(state.routes, action.payload!.id!)
				]
			};
		default:
			return state
	};
};

export default reducer;