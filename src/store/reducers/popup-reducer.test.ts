import popupReducer from './popup-reducer';
import { openPopup, closePopup } from '../actions';

describe('popup reducer', () => {

	it('opens popup', () => {

		const state = {
			isOpen: false
		};

		const action = openPopup();
		const newState = popupReducer(state, action);

		expect(newState.isOpen).toBeTruthy();
	});

	it('closes popup', () => {

		const state = {
			isOpen: true
		};

		const action = closePopup();
		const newState = popupReducer(state, action);

		expect(newState.isOpen).toBeFalsy();
	});

});