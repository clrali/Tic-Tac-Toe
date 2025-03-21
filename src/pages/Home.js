import StartButton from "../components/StartButton"
import "../styles/Home.css"

export default function Home() {
    var yellowBoardPiece = "dummy-yellow-square";
    var greenBoardPiece = "dummy-green-square";

    return <>
        <div className="background-image">
            <div className="dummy-board-background">
                <div className="dummy-board-highlight">
                    <div className="dummy-board">
                        <div className="board-row">
                            <div className={yellowBoardPiece}>
                            </div>
                            <div className={greenBoardPiece}>
                            </div>
                            <div className={yellowBoardPiece}>
                            </div>
                        </div>
                        <div className="board-row">
                            <div className={greenBoardPiece}>
                            </div>
                            <div className={`trigger ${yellowBoardPiece}`}>
                                <StartButton to="tic-tac-toe" />
                            </div>
                            <div className={greenBoardPiece}>
                            </div>
                        </div>
                        <div className="board-row">
                            <div className={yellowBoardPiece}>
                            </div>
                            <div className={greenBoardPiece}>
                            </div>
                            <div className={yellowBoardPiece}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>
}