import { PopupActionTypes } from '../action-types/popup-action-types';
import { PopupAction } from '../reducers/popup-reducer';

export const openPopup = (): PopupAction => {
	return {
		type: PopupActionTypes.OPEN_POPUP
	}
};

export const closePopup = (): PopupAction => {
	return {
		type: PopupActionTypes.CLOSE_POPUP
	}
};