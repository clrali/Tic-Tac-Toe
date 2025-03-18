import { Square } from "./Square";
import "../styles/Board.css"

export function Board({ xIsNext, squares, onPlay }) {
    const players = {
        "X": "Maruko Chan",
        "O": "Tama Chan",
    };
    var status;
    var winner;

    winner = calculateWinner(squares);
    if (winner) {
        status = (winner === "X" ? `Winner: ${players.X}` : winner === "O" ? `Winner: ${players.O}` : "No Winner");
    } else {
        status = "Next player: " + (xIsNext ? players.X : players.O);
    }

    function handleClick(i) {
        if (squares[i] || calculateWinner(squares)) {
            return;
        }
        const nextSquares = squares.slice();

        if (xIsNext) {
            nextSquares[i] = "X";
        } else {
            nextSquares[i] = "O"
        }
        onPlay(nextSquares);

    }


    return <>
        <div className="status">{status}</div>
        <div className="board-row">
            <Square idx={0} value={squares[0]} winner={winner} onSquareClick={() => handleClick(0)} />
            <Square idx={1} value={squares[1]} winner={winner} onSquareClick={() => handleClick(1)} />
            <Square idx={2} value={squares[2]} winner={winner} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
            <Square idx={3} value={squares[3]} winner={winner} onSquareClick={() => handleClick(3)} />
            <Square idx={4} value={squares[4]} winner={winner} onSquareClick={() => handleClick(4)} />
            <Square idx={5} value={squares[5]} winner={winner} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
            <Square idx={6} value={squares[6]} winner={winner} onSquareClick={() => handleClick(6)} />
            <Square idx={7} value={squares[7]} winner={winner} onSquareClick={() => handleClick(7)} />
            <Square idx={8} value={squares[8]} winner={winner} onSquareClick={() => handleClick(8)} />
        </div>
    </>
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    if (!squares.includes(null)) {
        return "Full";
    }
    return null;
}