import "./Navbar.css";
import { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navItems = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Contact",
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={scrolled ? "navbar navbar-scroll" : "navbar"}>
      <div className="logo">
        <div className="logo-circle">R</div>
        <span>Roshan</span>
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        {navItems.map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <HiX /> : <HiMenuAlt3 />}
      </button>
    </nav>
  );
}

export default Navbar;