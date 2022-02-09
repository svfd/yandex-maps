import { RouteListActionTypes } from '../action-types/route-list-types';

import { addRoute, setCurrentRoute, changeRouteOrder, updateGeometry, removeRoute } from './route-list-action';

describe('route list action', () => {

	const route = {
    name: 'some route',
    id: 1,
    order: 1,
    geometry: [1, 2]
	};

	it('adds route', () => {

		const expectedAction = {
			type: RouteListActionTypes.ADD_POINT,
			payload: {route}
		};

		const result = addRoute(route);

		expect(result).toStrictEqual(expectedAction);
	});

	it('sets current route', () => {

		const expectedAction = {
			type: RouteListActionTypes.SET_CURRENT_ROUTE,
			payload: {route}
		};

		const result = setCurrentRoute(route);

		expect(result).toStrictEqual(expectedAction);
	});

	it('changes route order', () => {

		const expectedAction = {
			type: RouteListActionTypes.CHANGE_POINT_ORDER,
			payload: {route}
		};

		const result = changeRouteOrder(route);

		expect(result).toStrictEqual(expectedAction);
	});

	it('updates route geometry', () => {

		const expectedAction = {
			type: RouteListActionTypes.UPDATE_POINT_GEOMETRY,
			payload: {route}
		};

		const result = updateGeometry(route);

		expect(result).toStrictEqual(expectedAction);
	});

	it('removes route', () => {

		const expectedAction = {
			type: RouteListActionTypes.REMOVE_POINT,
			payload: {id: route.id}
		};

		const result = removeRoute(route.id);

		expect(result).toStrictEqual(expectedAction);
	});

});