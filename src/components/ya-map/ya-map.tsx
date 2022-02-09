import { YMaps, Map } from 'react-yandex-maps';
import PlacemarkContainer from '../../containers/placemark-container';
import PolylineContainer from '../../containers/polyline-container';

import RouteListPopupContainer from '../../containers/route-list-popup-container';

type Props = {
	onMapLoaded: () => void,
	coordinates: {latitude: number, longitude: number}
};

const YaMap = ({ onMapLoaded, coordinates }: Props) => {
	return (
		<YMaps>
			<Map style={{width: '100vw', height: '100vh'}}
						defaultState={{ center: [coordinates.latitude, coordinates.longitude], zoom: 10 }}
						onLoad={onMapLoaded}
			>
				<PlacemarkContainer />
				<PolylineContainer />
			</Map>
			<RouteListPopupContainer />
		</YMaps>
	);
};

export default YaMap;