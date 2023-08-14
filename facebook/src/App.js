import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      
    </div>
  );
}

export default App;
