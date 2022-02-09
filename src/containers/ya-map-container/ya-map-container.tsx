import { useEffect } from 'react';
import { connect } from 'react-redux';

import { RootState } from '../../store';

import { mapStartLoading, mapEndLoading } from '../../store/actions';

import { defaultCoords } from '../../utils';

import YaMap from '../../components/ya-map';
import Spinner from '../../components/spinner';

type Props = {
	map: {loading: boolean},
	mapStartLoading: () => void,
	mapEndLoading: () => void
};

const YaMapContainer = ({ map, mapStartLoading, mapEndLoading }: Props) => {

	const { loading } = map;

	useEffect(() => {
		mapStartLoading();
	}, [mapStartLoading]);

	return (
		<>
			{loading ? <Spinner /> : null}
			<YaMap onMapLoaded={mapEndLoading}
							coordinates={defaultCoords}
			/>
		</>
	);
};

const mapStateToProps = ({ map }: RootState) => {
	return {map};
};

const mapDispatchToProps = {
	mapStartLoading,
	mapEndLoading
};

export default connect(mapStateToProps, mapDispatchToProps)(YaMapContainer);