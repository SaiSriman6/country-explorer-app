import React, { useRef, useEffect } from "react";

function SearchBar({ onSearch }) {
  const inputRef = useRef(null);
  // autofocus when component loads
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function handleChange(e) {
    onSearch(e.target.value);
  }
  return (
    <input
      ref={inputRef}
      type="text"
      placeholder="Search country..."
      onChange={handleChange}
      className="border p-2 w-full"
    />
  );
}

export default SearchBar;