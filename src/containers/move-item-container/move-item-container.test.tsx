import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { MoveItemContainer } from './move-item-container';

import { RouteItemType } from '../../types/route-item-type';

describe('move item container', () => {

	const setup = () => {

		const routes: RouteItemType[] = [
			{
				id: 1,
				order: 1,
				name: 'first',
				geometry: [1, 2]
			},
			{
				id: 2,
				order: 2,
				name: 'second',
				geometry: [3, 4]
			}
		];

		const setCurrentRoute = jest.fn();
		const changeRouteOrder = jest.fn();

		return {
			routes,
			setCurrentRoute,
			changeRouteOrder
		};
	};

	it('moves route point', () => {

		const { setCurrentRoute, changeRouteOrder, routes } = setup();

		const eventMap: any = {};

		document.addEventListener = jest.fn((event, callback) => {
			eventMap[event] = callback;
		});

		const renderRoutes = routes.map(({ id, name }) => <li key={id} className="list-item">{name}</li>);

		render(
			<MoveItemContainer setCurrentRoute={setCurrentRoute}
													changeRouteOrder={changeRouteOrder}
													routes={routes}
			>
				{renderRoutes}
			</MoveItemContainer>
		);

		const listItem = screen.getAllByRole('listitem')[0];

		fireEvent.mouseDown(listItem);

		document.elementFromPoint = jest.fn(() => screen.getAllByRole('listitem')[1]);

		eventMap.mousemove({target: document});
		eventMap.mouseup({target: document, changeRouteOrder});

		expect(setCurrentRoute).toHaveBeenCalledTimes(1);
		expect(changeRouteOrder).toHaveBeenCalledTimes(1);
	});

});