import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/login/Login";



function App() {
  return (
    <div >
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login/>}/>
      </Routes>

    </div>
  );
}

export default App;
