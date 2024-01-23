import PropTypes from 'prop-types';
import { InformationLayout } from './informationLayout';

export const Information = ({ isDraw, isGameEnded, currentPlayer }) => {
	let textInformation = '';
	if (isDraw === true) {
		textInformation = 'Ничья';
	} else if (isGameEnded === true) {
		textInformation = `Победа: ${currentPlayer}`;
	} else {
		textInformation = `Ходит ${currentPlayer}`;
	}
	return <InformationLayout textInformation={textInformation} />;
};

Information.propTypes = {
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	currentPlayer: PropTypes.string,
};
