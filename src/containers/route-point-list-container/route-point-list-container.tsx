import { connect } from 'react-redux';

import { RootState } from '../../store';

import Row from '../../components/row';
import RoutePointList from '../../components/route-point-list';
import RoutePointItem from '../../components/route-point-item';
import DeletePointButton from '../../components/delete-point-button';

import { removeRoute } from '../../store/actions';

import { RouteItemType } from '../../types/route-item-type';

import MoveItemContainer from '../move-item-container/move-item-container';

type Props = {
	routes: RouteItemType[],
	removeRoute: (id: number) => void
};

export const RoutePointListContainer = ({ routes, removeRoute }: Props) => {

	const sortRoutes = (a: RouteItemType, b: RouteItemType) => {
		return a.order > b.order ? 1 : -1;
	};

	const renderPoints = routes.sort(sortRoutes).map((route: RouteItemType) => {
		const { name, id } = route;

		const draggablePointItem = (
			<MoveItemContainer>
				<RoutePointItem pointName={name} {...{id}} />
			</MoveItemContainer>
		);

		return (
			<Row key={id}
						leftElement={draggablePointItem}
						rightElement={<DeletePointButton onButtonClick={() => removeRoute(id)} />}
						alignItems="center"
						justifyContent="space-between"
						leftWidth="1fr"
						rightWidth="auto"
			/>
		);
	});

	return (
		<RoutePointList>
			{renderPoints.length > 0 ? renderPoints : <RoutePointItem pointName="Список маршрутов пуст" />}
		</RoutePointList>
	);
};

const mapStateToProps = ({ routeList }: RootState) => {
	const { routes }: {routes: RouteItemType[]} = routeList;

	return {routes};
};

const mapDispatchToProps = {
	removeRoute
};


export default connect(mapStateToProps, mapDispatchToProps)(RoutePointListContainer);