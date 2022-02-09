import { combineReducers } from 'redux';

import routeFieldReducer from './route-field-reducer';
import routeListReducer from './route-list-reducer'
import popupReducer from './popup-reducer';
import mapReducer from './map-reducer';


export default combineReducers({
	routeField: routeFieldReducer,
	routeList: routeListReducer,
	popup: popupReducer,
	map: mapReducer
});