import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";

function App() {
  return (
    <BrowserRouter>
      {/* MENU BAR */}
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/about" style={styles.link}>About</Link>
        <Link to="/contact" style={styles.link}>Contact</Link>
      </nav>

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </BrowserRouter>
  );
}

const styles = {
  nav: {
    backgroundColor: "#333",
    padding: "10px",
    display: "flex",
    gap: "20px",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "18px"
  }
};

export default App;
