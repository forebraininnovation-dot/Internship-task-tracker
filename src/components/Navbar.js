import "../styles/navbar.css";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "../styles/navbar.css";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="navbar fade-in">
      <h2>Internship Tracker</h2>

      <div className="nav-right">
       <button className="theme-toggle" onClick={toggleTheme}>
  {theme === "light" ? "🌙 Dark Mode" : "☀ Light Mode"}
</button>


        <span className="user-name">Mohammed Owais</span>
        <div className="avatar">MO</div>
      </div>
    </div>
  );
}

export default Navbar;





