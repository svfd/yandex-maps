import { RouteFieldActionTypes } from '../action-types/route-field-action-types';

import { setPointName } from './route-field-action';

describe('route field action', () => {

	it('sets point name', () => {

		const pointName = 'park';

		const expectedAction = {
			type: RouteFieldActionTypes.SET_POINT_NAME,
			payload: {value: pointName}
		};

		const result = setPointName(pointName);

		expect(result).toStrictEqual(expectedAction);
	});

});