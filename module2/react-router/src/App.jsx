import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import User from "./pages/User";

function App() {
  return (
    <div>
      <div>
        <Link to="/"> Home</Link>
        <Link to="/about"> About</Link>
        <Link to="/contact"> Contact</Link>

        <Link to="/user"> User</Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/:userId" element={<User />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <div>Pedrotech.co copyright 2025.</div>
    </div>
  );
}

export default App;
