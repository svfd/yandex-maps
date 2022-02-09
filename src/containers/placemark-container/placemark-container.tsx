import { Placemark, GeoObjectGeometry } from 'react-yandex-maps';

import { connect } from 'react-redux';

import { RootState } from '../../store';

import { updateGeometry } from '../../store/actions';

import { RouteItemType } from '../../types/route-item-type';
import { useEffect, useState } from 'react';

type Props = {
	routes?: RouteItemType[],
	updateGeometry: (route: RouteItemType) => void
};

const PlacemarkContainer = ({ routes = [], updateGeometry }: Props) => {

	const [ iconContent, setIconContent ] = useState<null | number[]>(null);

	useEffect(() => {
		const indexList = routes.map((route, index) => index + 1);
		setIconContent(indexList);
	}, [routes]);
	
	const getCoordinates = (evt: GeoObjectGeometry, route: RouteItemType) => {
		const geometry = evt.get('target').geometry.getCoordinates();

		updateGeometry({...route, geometry});
	};

	const renderRoutes = (route: RouteItemType, index: number) => {
		const { id, name, geometry } = route;

		return (
			<Placemark key={id}
									geometry={geometry}
									options={{draggable: true}}
									modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
									properties={{balloonContent: name, iconContent: iconContent![index]}}
									onGeometryChange={(evt: GeoObjectGeometry) => getCoordinates(evt, route)}
			/>
		);
	};

	return (
		<>
			{routes.map(renderRoutes)}
		</>
	);
	
}

const mapStateToProps = ({ routeList }: RootState ) => {
	const { routes }: {routes: RouteItemType[]} = routeList;

	return {routes};
};

const mapDispatchToProps = {
	updateGeometry
};

export default connect(mapStateToProps, mapDispatchToProps)(PlacemarkContainer);