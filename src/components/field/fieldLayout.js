import styles from './field.module.css';
import PropTypes from 'prop-types';
import { Cell } from './cell';

export const FieldLayout = ({ field, handleClickCell, winningIndex }) => (
	<div className={styles.field}>
		{field.map((cell, index) => (
			<Cell
				key={index}
				index={index}
				cell={cell}
				handleClickCell={handleClickCell}
				winningIndex={winningIndex}
			/>
		))}
	</div>
);

FieldLayout.propTypes = {
	field: PropTypes.array,
	handleClickCell: PropTypes.func,
	winningIndex: PropTypes.array,
};
