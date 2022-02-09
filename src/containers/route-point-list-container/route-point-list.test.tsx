import { screen, render } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { WithProvider } from '../../helpers';
import { RoutePointListContainer } from './route-point-list-container';

import { RouteItemType } from '../../types/route-item-type';

describe('route point list', () => {

	const getRandomGeometry = () => {
		return [Math.random() * 30, Math.random() * 30];
	};

	const routeList = [
		{
			name: 'mall',
			id: 1,
			order: 1,
			geometry: getRandomGeometry()
		},
		{
			name: 'park',
			id: 2,
			order: 2,
			geometry: getRandomGeometry()
		},
		{
			name: 'cafe',
			id: 3,
			order: 3,
			geometry: getRandomGeometry()
		}
	];

	const setup = (routeList: RouteItemType[] = []) => {

		const removeRouteHandler = jest.fn();

		render(
			<WithProvider>
				<RoutePointListContainer routes={routeList} removeRoute={removeRouteHandler} />
			</WithProvider>
		);

		return {
			removeRouteHandler
		};

	};

	it('renders empty list', () => {

		setup();

		expect(screen.getByText(/список маршрутов пуст/i)).toBeInTheDocument();
	});

	it('renders route list', () => {

		setup(routeList);

		expect(screen.getAllByRole('listitem')).toHaveLength(3);
	});

	it('deletes one route point', () => {

		const { removeRouteHandler } = setup(routeList);

		userEvent.click(screen.getAllByLabelText(/удалить маршрут/i)[1]);

		expect(removeRouteHandler).toHaveBeenCalledTimes(1);
	});

});