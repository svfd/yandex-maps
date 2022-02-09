import { RouteFieldActionTypes } from '../action-types/route-field-action-types';
import { RouteFieldAction } from '../reducers/route-field-reducer';

export const setPointName = (name: string): RouteFieldAction => {
	return {
		type: RouteFieldActionTypes.SET_POINT_NAME,
		payload: {value: name}
	};
};