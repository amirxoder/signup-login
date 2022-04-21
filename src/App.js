import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-zinc-800">
      {/* <Signup /> */}
      <Login />
    </div>
  );
}

export default App;
