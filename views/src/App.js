import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import "./App.css";
import "./index.css";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />}></Route>
      <Route path="/home" element={<Home />}></Route>
    </Routes>
  );
}

export default App;
