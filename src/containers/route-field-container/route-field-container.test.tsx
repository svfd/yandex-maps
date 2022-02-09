import { screen, render, fireEvent } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { RouteFieldContainer } from './route-field-container';

describe('route field container', () => {

	const setup = () => {

		const addRoute = jest.fn();
		const setPointName = jest.fn();

		render(
			<RouteFieldContainer value=""
														routes={[]}
														addRoute={addRoute}
														setPointName={setPointName}
			/>
		);

		return {
			addRoute,
			setPointName
		};
	};

	it('renders route field container', () => {

		setup();

		expect(screen.getByRole('textbox')).toBeInTheDocument();
	});

	it('changes route field value', () => {

		const { setPointName } = setup();

		const field = screen.getByRole('textbox');

		const newFieldValue = 'point name';

		userEvent.type(field, newFieldValue);

		expect(setPointName).toHaveBeenCalledTimes(newFieldValue.length);
	});

	it('adds new route', () => {

		const { addRoute, setPointName } = setup();

		const field = screen.getByRole('textbox');

		const newFieldValue = 'point name';

		userEvent.type(field, newFieldValue);

		expect(setPointName).toHaveBeenCalledTimes(newFieldValue.length);

		fireEvent.submit(field);

		expect(addRoute).toHaveBeenCalledTimes(1);
	});

});