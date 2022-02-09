import { Provider } from 'react-redux'

import { store } from '../store';

type Props = {
	children: React.ReactElement
};

const WithProvider = ({ children }: Props) => {
	return (
		<Provider store={store}>
			{children}
		</Provider>
	);
};

export default WithProvider;