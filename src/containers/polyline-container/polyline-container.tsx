import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Polyline, PolylineGeometry } from 'react-yandex-maps';

import { RootState } from '../../store';

import { RouteItemType } from '../../types/route-item-type';

type Props = {
	routes: RouteItemType[],
};

const PolylineContainer = ({ routes }: Props) => {

	const [geometryList, setGeometryList] = useState<undefined | PolylineGeometry>(undefined);

	useEffect(() => {
		setGeometryList(routes.map((route) => route.geometry));
	}, [routes]);

	return (
		<Polyline geometry={geometryList} />
	);
};

const mapStateToProps = ({ routeList }: RootState) => {
	const { routes } = routeList;
	
	return {routes};
};

export default connect(mapStateToProps)(PolylineContainer);