import { BaseActionTypes } from '../action-types/base-action-types';
import { RouteFieldActionTypes } from '../action-types/route-field-action-types';

type State = {
	value: string
};

export type RouteFieldAction = BaseActionTypes<RouteFieldActionTypes, State>;

const reducer = (state: State, action: RouteFieldAction): State => {

	if (state === undefined) {
		return {
			value: ''
		}
	}

	switch(action.type) {
		case RouteFieldActionTypes.SET_POINT_NAME:
			return {
				...state,
				value: action.payload!.value
			};
		default:
			return state
	}
};

export default reducer;