import styles from './field.module.css';
import PropTypes from 'prop-types';

export const Cell = ({ index, cell, handleClickCell, winningIndex }) => {
	return (
		<div
			className={`${styles.cell} ${
				winningIndex !== null && winningIndex.includes(index)
					? styles.winningCell
					: ''
			}`}
			onClick={() => {
				handleClickCell(index);
			}}
		>
			{cell}
		</div>
	);
};

Cell.propTypes = {
	index: PropTypes.number,
	cell: PropTypes.string,
	handleClickCell: PropTypes.func,
	winningIndex: PropTypes.array,
};
