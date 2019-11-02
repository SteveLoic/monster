import React from "react";

import "./search-box.styles.css";

const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="search"
      onChange={handleChange}
    />
  );
};

export default SearchBox;
