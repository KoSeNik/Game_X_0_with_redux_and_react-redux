import { GameLayout } from "./gameLayout";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCurrentPlayer,
  selectIsGameEnded,
  selectIsDraw,
  selectField,
  selectWinningIndex,
} from "./store/selectors";

import {
  setPlayer,
  setIsGameEnded,
  setIsDraw,
  setField,
  setWinningIndex,
  resetGame,
} from "./store/actions";

export const Game = () => {
  const currentPlayer = useSelector(selectCurrentPlayer);
  const isGameEnded = useSelector(selectIsGameEnded);
  const isDraw = useSelector(selectIsDraw);
  const field = useSelector(selectField);
  const winningIndex = useSelector(selectWinningIndex);

  const dispatch = useDispatch();

  const handleClickCell = (index) => {
    if (field[index] === "" && isGameEnded === false) {
      const nextField = field.slice();
      nextField[index] = currentPlayer;
      dispatch(setField(nextField));
      checkDraw(nextField);
      dispatch(setPlayer(currentPlayer === "X" ? "O" : "X"));
      checkWinner(nextField);
    }
  };

  const checkDraw = (field) => {
    if (!field.includes("") && isGameEnded !== true) dispatch(setIsDraw(true));
  };

  const checkWinner = (field) => {
    const WIN_PATTERNS = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // Варианты побед по горизонтали
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // Варианты побед по вертикали
      [0, 4, 8],
      [2, 4, 6], // Варианты побед по диагонали
    ];
    for (let i = 0; i < WIN_PATTERNS.length; i++) {
      const [a, b, c] = WIN_PATTERNS[i];
      if (field[a] && field[a] === field[b] && field[a] === field[c]) {
        dispatch(setIsGameEnded(true));
        dispatch(setPlayer(currentPlayer));
        dispatch(setIsDraw(false));
        dispatch(setWinningIndex(WIN_PATTERNS[i]));
      }
    }
  };

  const clickReset = () => {
    dispatch(resetGame);
  };

  return (
    <GameLayout
      currentPlayer={currentPlayer}
      isGameEnded={isGameEnded}
      isDraw={isDraw}
      field={field}
      handleClickCell={handleClickCell}
      clickReset={clickReset}
      winningIndex={winningIndex}
    />
  );
};
