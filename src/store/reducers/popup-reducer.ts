import { BaseActionTypes } from '../action-types/base-action-types';
import { PopupActionTypes } from '../action-types/popup-action-types'

type State = {
	isOpen: boolean
};

export type PopupAction = BaseActionTypes<PopupActionTypes, State>;

const reducer = (state: State, action: PopupAction): State => {

	if (state === undefined) {
		return {
			isOpen: false
		};
	}

	switch(action.type) {
		case PopupActionTypes.OPEN_POPUP:
			return {
				...state,
				isOpen: true
			}
		case PopupActionTypes.CLOSE_POPUP:
			return {
				...state,
				isOpen: false
			}
		default:
			return state;
	}
};

export default reducer;