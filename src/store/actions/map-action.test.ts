import { MapActionTypes } from '../action-types/map-action-types';
import { mapStartLoading, mapEndLoading } from './map-action';

describe('map action test', () => {

	it('starts map loading', () => {

		const expectedAction = {
			type: MapActionTypes.START_MAP_LOADING
		};

		const result = mapStartLoading();

		expect(result).toStrictEqual(expectedAction);
	});

	it('ends map loading', () => {

		const expectedAction = {
			type: MapActionTypes.END_MAP_LOADING
		};

		const result = mapEndLoading();

		expect(result).toStrictEqual(expectedAction);
	});

});