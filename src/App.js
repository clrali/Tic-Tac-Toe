import StartGame from "./pages/StartGame";
import Home from "./pages/Home"

import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";

export default function App() {
  return <>
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/tic-tac-toe" element={<StartGame />} />
      </Routes>
    </Router>
  </>
}