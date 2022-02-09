import './row.scss';

type Props = Styles & {
	leftElement: React.ReactNode,
	rightElement: React.ReactNode
};

type Styles = React.CSSProperties & {
	alignItems?: string,
	justifyContent?: string,
	gap?: string,
	leftWidth?: string,
	rightWidth?: string
};

const useStyles = (styles: Styles) => {
	return {
		alignItems: styles.alignItems,
		justifyContent: styles.justifyContent,
		gap: styles.gap,
		gridTemplateColumns: `${styles.leftWidth} ${styles.rightWidth}`
	}
};

const Row = ({ leftElement, rightElement, ...props }: Props) => {

	return (
		<div className="row"
					style={useStyles(props)}
		>
			{leftElement}
			{rightElement}
		</div>
	);
};

export default Row;