import React, { useState } from "react";

// Filter component to handle category filtering and search functionality
function Filter({ onCategoryChange, onSearchChange, search }) {
  // State to manage the search term, initialized with prop or empty string
  const [searchTerm, setSearchTerm] = useState(search || "");

  return (
    <div className="Filter">
      {/* Input for search term, controlled by searchTerm state and triggers onSearchChange */}
      <input type="text" name="search" value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value); onSearchChange(e); }} placeholder="Search..." />
      {/* Select dropdown for category filtering, triggers onCategoryChange on change */}
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;