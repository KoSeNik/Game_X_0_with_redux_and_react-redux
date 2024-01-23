const initialState = {
	currentPlayer: 'X',
	isGameEnded: false,
	isDraw: false,
	field: Array(9).fill(''),
	winningIndex: null,
};

const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'SET_PLAYER': {
			return {
				...state,
				currentPlayer: payload,
			};
		}
		case 'SET_IS_GAME_ENDED': {
			return {
				...state,
				isGameEnded: payload,
			};
		}
		case 'SET_IS_DRAW': {
			return {
				...state,
				isDraw: payload,
			};
		}
		case 'SET_FIELD': {
			return {
				...state,
				field: payload,
			};
		}
		case 'SET_WINNING_INDEX': {
			return {
				...state,
				winningIndex: payload,
			};
		}
		case 'RESET': {
			return initialState;
		}
		default:
			return state;
	}
};

export default reducer;
