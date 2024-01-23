import styles from './game.module.css';
import PropTypes from 'prop-types';
import { Information } from './components/information/information';
import { Field } from './components/field/field';

export const GameLayout = ({
	currentPlayer,
	isGameEnded,
	isDraw,
	field,
	handleClickCell,
	clickReset,
	winningIndex,
}) => (
	<div className={styles.game}>
		<Information
			currentPlayer={currentPlayer}
			isDraw={isDraw}
			isGameEnded={isGameEnded}
		/>
		<Field
			field={field}
			handleClickCell={handleClickCell}
			winningIndex={winningIndex}
		/>
		<button onClick={() => clickReset()}>Начать заново</button>
	</div>
);

GameLayout.propTypes = {
	currentPlayer: PropTypes.string,
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	field: PropTypes.array,
	handleClickCell: PropTypes.func,
	winningIndex: PropTypes.array,
	clickReset: PropTypes.func,
};
