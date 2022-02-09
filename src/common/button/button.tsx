import './button.scss';

export type Props = Styles & {
	label?: string,
	children?: React.ReactNode,
	type: keyof typeof buttonTypes,
	onButtonClick?: (evt: React.MouseEvent<HTMLButtonElement>) => void,
};

type Styles = React.CSSProperties & {
	position?: string,
	top?: string,
	left?: string,
	right?: string,
	transformX?: string,
	transformY?: string,
	radius?: string,
	backgroundColor?: string
};

const buttonTypes = {
	open: 'popup-button-open',
	close: 'popup-button-close',
	delete: 'popup-button-delete'
};

const useStyles = (styles: Styles) => {
	return {
		position: styles.position,
		top: styles.top,
		left: styles.left,
		right: styles.right,
		transform: `translate(${styles.transformY ?? 0}, ${styles.transformX ?? 0})`,
		borderRadius: styles.radius,
		backgroundColor: styles.backgroundColor
	}
};

const PopupButton = ({ label, children, type, onButtonClick, ...styles }: Props) => {

	const className = `popup-button ${buttonTypes[type]}`;

	return (
		<button aria-label={label}
						onClick={onButtonClick}
						className={className}
						style={useStyles(styles)}
		>
			{children}
		</button>
	);
};

PopupButton.defaultProps = {
	onButtonClick: (evt: React.MouseEvent<HTMLButtonElement>) => {}
};

export default PopupButton;