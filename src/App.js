import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-zinc-800">
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to={"/signup"} />} />
      </Routes>
    </div>
  );
}

export default App;
