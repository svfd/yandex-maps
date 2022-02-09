import { connect } from 'react-redux';

import { RootState } from '../../store';

import { openPopup, closePopup } from '../../store/actions';

import RouteListPopup from '../../components/route-list-popup';

import OpenPopupButton from '../../components/open-popup-button';

type Props = {
	isOpen: boolean,
	openPopup: () => void,
	closePopup: () => void
};

export const RouteListPopupContainer = ({ isOpen, openPopup, closePopup }: Props) => {

	return (
		<>
			{!isOpen &&
				<OpenPopupButton onButtonClick={openPopup} />
			}
			{isOpen &&
				<RouteListPopup	onPopupClose={closePopup} />
			}
		</>
	);
};

const mapStateToProps = ({ popup }: RootState) => {
	const { isOpen }: {isOpen: boolean} = popup;
	
	return {isOpen};
};

const mapDispatchToProps = {
	openPopup,
	closePopup
};

export default connect(mapStateToProps, mapDispatchToProps)(RouteListPopupContainer);