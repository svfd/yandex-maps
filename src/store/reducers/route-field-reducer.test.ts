import routeFieldReducer from './route-field-reducer';
import { setPointName } from '../actions';

describe('route field reducer', () => {

	it('sets point name', () => {

		const state = {
			value: ''
		};

		const pointName = 'new name';

		const action = setPointName(pointName);
		const newState = routeFieldReducer(state, action);

		expect(newState.value).toBe(pointName);
	});

});