import { useNavigate } from "react-router-dom"
import "../styles/StartButton.css"

export default function StartButton({ to, className }) {
    const navigate = useNavigate();

    function handleClick(to) {
        navigate(`/${to}`)
    }

    return <>
        <button className={className} onClick={() => handleClick(to)}>
            {to === 'home' ? "home" : "start"}
        </button>
    </>

}