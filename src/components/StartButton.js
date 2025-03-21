import { useNavigate } from "react-router-dom"
import "../styles/StartButton.css"

export default function StartButton({ to }) {
    const navigate = useNavigate();

    function handleClick(to) {
        navigate(`/${to}`)
    }

    return <>
        <button className="start-button" onClick={() => handleClick(to)}>
            {to === '' ? "home" : "start"}
        </button>
    </>

}