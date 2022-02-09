import errorIndicatorIcon from './error-indicator.png';

import './error-indicator.scss';

const ErrorIndicator = () => {
	return (
		<img className="error-indicator"
					src={errorIndicatorIcon}
					alt="error inidcator"
					width="150px"
					height="auto"
		/>
	);
};

export default ErrorIndicator;