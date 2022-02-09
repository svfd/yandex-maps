import React from 'react';

import { RootState } from '../../store';

import { connect } from 'react-redux';

import { addRoute, setPointName } from '../../store/actions';

import { defaultCoords } from '../../utils';

import RouteField from '../../components/route-field';

import type { RouteItemType } from '../../types/route-item-type';

type Props = {
	value: string,
	routes: RouteItemType[],
	addRoute: (routeData: RouteItemType) => void,
	setPointName: (value: string) => void
};

export const RouteFieldContainer = ({ value, routes, addRoute, setPointName }: Props) => {

	const onSetPointName = (evt: React.ChangeEvent<HTMLInputElement>) => {
		setPointName(evt.target.value);
	};

	const _getLastRouteIdOrOrder = (paramName: 'id' | 'order'): number => {

		if (routes.length === 0) {
			return 0;
		}

		const dataList = routes.map((route) => route[paramName]);

		const lastRouteData = Math.max.apply(null, dataList);

		return lastRouteData;
	};

	const onAddNewRoute = (evt: React.FormEvent<HTMLFormElement>) => {

		evt.preventDefault();

		const newRouteId = _getLastRouteIdOrOrder('id') + 1;
		const newRouteOrder = _getLastRouteIdOrOrder('order') + 1;

		const pointData: RouteItemType = {
			name: value,
			id:  newRouteId,
			order: newRouteOrder,
			geometry: [defaultCoords.latitude, defaultCoords.longitude]
		};

		addRoute(pointData);
		setPointName('');
	};


	return (
		<RouteField onAddNewRoute={onAddNewRoute}
								setNewValue={onSetPointName}
								value={value}
		/>
	);
};

const mapStateToProps = ({ routeField, routeList }: RootState) => {
	const { value }: {value: string} = routeField;
	const { routes }: {routes: RouteItemType[]} = routeList;

	return {value, routes};
};

const mapDispatchToProps = {
	addRoute,
	setPointName
};

export default connect(mapStateToProps, mapDispatchToProps)(RouteFieldContainer);