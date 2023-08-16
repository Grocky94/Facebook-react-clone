import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/login/Login";
import Profile from "./components/profile/Profile";
import Story from "./components/story/Story";



function App() {
  return (
    <div >
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/story" element={<Story />} />
      </Routes>

    </div>
  );
}

export default App;
