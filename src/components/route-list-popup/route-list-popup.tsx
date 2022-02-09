import ClosePopupButton from '../../components/close-popup-button';

import RouteFieldContainer from '../../containers/route-field-container';
import RoutePointListContainer from '../../containers/route-point-list-container';

import './route-list-popup.scss';

type Props = {
	onPopupClose: (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
};

const RouteListPopup = ({ onPopupClose }: Props) => {
	return (
			<section className="route-list-popup">
				<div className="route-list-wrapper">
					<ClosePopupButton onButtonClick={onPopupClose} />
					<RouteFieldContainer />
					<RoutePointListContainer />
				</div>
			</section>
	);
};

export default RouteListPopup;