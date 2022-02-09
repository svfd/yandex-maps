import { PopupActionTypes } from '../action-types/popup-action-types';

import { openPopup, closePopup } from './popup-action';

describe('popup action', () => {

	it('opens popup', () => {

		const expectedAction = {
			type: PopupActionTypes.OPEN_POPUP
		};

		const result = openPopup();

		expect(result).toStrictEqual(expectedAction);
	});

	it('closes popup', () => {

		const expectedAction = {
			type: PopupActionTypes.CLOSE_POPUP
		};

		const result = closePopup();

		expect(result).toStrictEqual(expectedAction);
	});

});