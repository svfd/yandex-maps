import { MapActionTypes } from '../action-types/map-action-types';
import { MapAction } from '../reducers/map-reducer';

export const mapStartLoading = (): MapAction => {
	return {
		type: MapActionTypes.START_MAP_LOADING
	}
};

export const mapEndLoading = () => {
	return {
		type: MapActionTypes.END_MAP_LOADING
	}
};