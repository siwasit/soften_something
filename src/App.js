import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/home";
import Hintpage from "./pages/hint";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/hint" element={<Hintpage />} />
        <Route path="/hint/:studentid" element={<Hintpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
