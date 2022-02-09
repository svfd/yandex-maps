import type { RouteItemType } from '../../types/route-item-type';
import type { RouteListAction } from '../reducers/route-list-reducer';

import { RouteListActionTypes } from '../action-types/route-list-types';

export const addRoute = (route: RouteItemType): RouteListAction => {
	return {
		type: RouteListActionTypes.ADD_POINT,
		payload: {route}
	};
};

export const setCurrentRoute = (route: RouteItemType): RouteListAction => {
	return {
		type: RouteListActionTypes.SET_CURRENT_ROUTE,
		payload: {route}
	};
};

export const changeRouteOrder = (route: RouteItemType): RouteListAction => {
	return {
		type: RouteListActionTypes.CHANGE_POINT_ORDER,
		payload: {route}
	};
};

export const updateGeometry = (route: RouteItemType): RouteListAction => {
	return {
		type: RouteListActionTypes.UPDATE_POINT_GEOMETRY,
		payload: {route}
	}
};

export const removeRoute = (id: number): RouteListAction => {
	return {
		type: RouteListActionTypes.REMOVE_POINT,
		payload: {id}
	};
};