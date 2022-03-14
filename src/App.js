import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Navbar from "./components/Navigation/Navbar";
import Laki from "./components/laki/Laki.jsx";
import Scroll from "./components/scroll/Scroll";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/laki" element={<Laki />} />
        <Route path="/souwar" element={<Scroll />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
