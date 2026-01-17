// src/components/Header.jsx

// 1. Import the CSS file directly next to this file
import './Header.css';

function Header() {
  return (
    // 2. Use className instead of class
    <header className="header-container">
      <h1 className="header-logo">My React App</h1>
      <nav className="header-nav">
        <a href="#home">Home</a>
        <a href="#about">About</a>
      </nav>
    </header>
  );
}

// 3. Export it so other files can use it
export default Header;