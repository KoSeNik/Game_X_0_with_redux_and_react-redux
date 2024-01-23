export const setPlayer = (currentPlayer) => ({
  type: "SET_PLAYER",
  payload: currentPlayer,
});

export const setIsGameEnded = (isGameEnded) => ({
  type: "SET_IS_GAME_ENDED",
  payload: isGameEnded,
});

export const setIsDraw = (isDraw) => ({
  type: "SET_IS_DRAW",
  payload: isDraw,
});

export const setField = (field) => ({
  type: "SET_FIELD",
  payload: field,
});

export const setWinningIndex = (winningIndex) => ({
  type: "SET_WINNING_INDEX",
  payload: winningIndex,
});

export const resetGame = {
  type: "RESET",
};
