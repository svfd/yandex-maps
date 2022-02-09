import mapReducer from './map-reducer';
import { mapStartLoading, mapEndLoading } from '../actions/map-action';

describe('map reducer', () => {

	it('starts loading', () => {

		const state = {
			loading: false
		};

		const action = mapStartLoading();
		const newState = mapReducer(state, action);

		expect(newState.loading).toBeTruthy();
	});

	it('end loading', () => {

		const state = {
			loading: true
		};

		const action = mapEndLoading();
		const newState = mapReducer(state, action);

		expect(newState.loading).toBeFalsy();
	});

});