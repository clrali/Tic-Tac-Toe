import '../styles/Square.css'


export function Square({ idx, value, onSquareClick, winner }) {
  var gamePiece = "squareButton";
  var yellowBoardPiece = "yellowSquare";
  var greenBoardPiece = "greenSquare";

  gamePiece += value === "X" ? " maruko" : value === "O" ? " tama" : "";

  if (winner) {
    yellowBoardPiece += " no-hover";
    greenBoardPiece += " no-hover";
  }

  if (winner === "X") {
    gamePiece += value === "X" ? " maruko-win wobble" : value === "O" ? " tama-lost" : "";
  } else if (winner === "O") {
    gamePiece += value === "X" ? " maruko-lost" : value === "O" ? " tama-win wobble" : "";
  } else if (winner === "Full") {
    gamePiece += value === "X" ? " maruko-lost" : value === "O" ? " tama-lost" : "";
  }

  if (idx % 2 === 0) {
    return <>
      <div className={yellowBoardPiece}>
        <button className={gamePiece} onClick={onSquareClick}></button>
      </div>
    </>
  } else {
    return <>
      <div className={greenBoardPiece}>
        <button className={gamePiece} onClick={onSquareClick}></button>
      </div>
    </>
  }
}