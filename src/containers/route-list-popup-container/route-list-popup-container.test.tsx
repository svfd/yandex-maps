import { screen, render } from '@testing-library/react';

import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import { WithProvider } from '../../helpers';
import { RouteListPopupContainer } from './route-list-popup-container';

describe('Route point list container', () => {

	const setup = (isOpen: boolean) => {

		const openPopupHandler = jest.fn();
		const closePopupHandler = jest.fn();

		render(
			<WithProvider>
				<RouteListPopupContainer isOpen={isOpen}
																	openPopup={openPopupHandler}
																	closePopup={closePopupHandler}
				/>
			</WithProvider>
		);

		return {
			openPopupHandler,
			closePopupHandler
		};
	}

	it('renders popup default state', () => {

		setup(false);

		expect(screen.getByLabelText(/показать список маршрутов/i)).toBeInTheDocument();
	});

	it('clicks by button', () => {

		const { openPopupHandler } = setup(false);

		const popupOpenButton = screen.getByLabelText(/показать список маршрутов/i);

		userEvent.click(popupOpenButton);

		expect(openPopupHandler).toHaveBeenCalledTimes(1);
	});

	it('renders popup in open state', () => {

		setup(true);

		const closePopupButton = screen.getByLabelText(/закрыть список маршрутов/i);
		
		expect(closePopupButton).toBeInTheDocument();
		expect(screen.getByText(/список маршрутов пуст/i)).toBeInTheDocument();
	});

});