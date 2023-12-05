const intialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard(params) {
  return (
    <ol id="game-board">
      {intialGameBoard.map((row, rowIndex) => (
        <ol key={rowIndex}>
          {row.map((playerSymbol, colIndex) => (
            <li key={colIndex}>
              <button>{playerSymbol}</button>
            </li>
          ))}
        </ol>
      ))}
    </ol>
  );
}
