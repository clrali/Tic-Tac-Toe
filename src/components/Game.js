import { useState } from "react";
import { Board } from "./Board";
import "../styles/Game.css"

export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    const moves = history.map((squares, move) => {
        console.log("squares ", squares)
        var description;
        if (move === currentMove && move > 0) {
            description = "you are at move " + move;
        }
        else if (move > 0) {
            description = "go to move " + move;
        } else {
            description = "restart";
        }

        return <>
            <div className="status-background" key={move}>
                <button className="status-button" onClick={() => jumpTo(move)}>{description}</button>
            </div>
        </>
    }
    );

    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
    }

    return <>
        <div className="background-image">
            <div className="game">
                <div className="game-board">
                    <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
                </div>
                <div className="history-padding">
                    <div key={moves} className="game-info">
                        <p>{moves}</p>
                    </div>
                </div>
            </div>
        </div>
    </>
}