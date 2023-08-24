import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Missing from "./pages/Missing";
import Register from "./pages/Register";
import { NavLink } from "react-router-dom";

import "./styles.scss";

function App() {
  return (
    <main className="App">
      <div style={{ display: "flex", gap: "2rem", padding: "2rem" }}>
        <NavLink to="/register">register</NavLink>
        <NavLink to="/login">login</NavLink>
        <NavLink to="/">home</NavLink>
        <NavLink to="/Profile">Profile</NavLink>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Missing />} />
      </Routes>
    </main>
  );
}

export default App;
