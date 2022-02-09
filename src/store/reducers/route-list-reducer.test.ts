import routeListReducer from './route-list-reducer';
import { addRoute, setCurrentRoute, changeRouteOrder, updateGeometry, removeRoute } from '../actions';

import { RouteItemType } from '../../types/route-item-type';

describe('route list reducer', () => {

	const setup = () => {

		const routes = [
			{
				name: 'first route',
				id: 0,
				order: 1,
				geometry: [1, 2]
			},
			{
				name: 'second route',
				id: 1,
				order: 2,
				geometry: [3, 4]
			},
			{
				name: 'third route',
				id: 2,
				order: 3,
				geometry: [4, 5]
			}
		];
	
		const route = {
			name: 'fourth route',
			id: 3,
			order: 4,
			geometry: [5, 6]
		};

		type State = {
			routes: RouteItemType[],
			currentRoute: RouteItemType | null
		}

		const state: State = {
			routes,
			currentRoute: null
		};

		return {
			routes,
			route,
			state
		};

	};

	it('adds route to route list', () => {

		const { state, route, routes } = setup();

		const action = addRoute(route);
		const newState = routeListReducer(state, action);

		expect(newState.routes).toStrictEqual([...routes, route]);
	});

	it('sets current route', () => {

		const { state, routes } = setup();

		const action = setCurrentRoute(routes[1]);
		const newState = routeListReducer(state, action);

		expect(newState.currentRoute).toStrictEqual(routes[1]);
	});

	it('changes route order', () => {

		const { state, routes } = setup();

		state.currentRoute = routes[1];

		const action = changeRouteOrder(routes[2]);
		const newState = routeListReducer(state, action);

		expect(newState.routes[1].order).toBe(3);
		expect(newState.routes[2].order).toBe(2);
	});

	it('updates route geometry', () => {

		const { state, routes } = setup();

		const newGeometry = [7, 8];

		const action = updateGeometry({...routes[1], geometry: newGeometry});
		const newState = routeListReducer(state, action);

		expect(newState.routes[1].geometry).toStrictEqual(newGeometry);
	});

	it('removes route from route list', () => {

		const { state, routes } = setup();

		const action = removeRoute(routes[1].id);
		const newState = routeListReducer(state, action);

		expect(newState.routes).toHaveLength(state.routes.length - 1);
	});

});