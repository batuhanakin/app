import { Route, Routes } from "react-router-dom";
import Game from "./Game";
import Welcome from "./Welcome";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="game" element={<Game />} />
      </Routes>
    </>
  );
}

export default App;
