import React from "react";

const Header = ({ onDarkModeClick }) => {
  return (
    <header>
      <h1>Shopping List App</h1>
      <button onClick={onDarkModeClick}>Toggle Dark Mode</button>
    </header>
  );
};

export default Header;