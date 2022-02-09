import { BaseActionTypes } from '../action-types/base-action-types';
import { MapActionTypes } from '../action-types/map-action-types';

type State = {
	loading: boolean
};

export type MapAction = BaseActionTypes<MapActionTypes, State>;

const reducer = (state: State, action: MapAction): State => {
	if (state === undefined) {
		return {
			loading: false
		};
	}

	switch(action.type) {
		case MapActionTypes.START_MAP_LOADING:
			return {
				...state,
				loading: true
			};
		case MapActionTypes.END_MAP_LOADING:
			return {
				...state,
				loading: false
			};
		default:
			return {
				...state
			}
	}
};

export default reducer;