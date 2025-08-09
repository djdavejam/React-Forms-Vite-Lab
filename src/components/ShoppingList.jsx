import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

// ShoppingList component to manage the list of items and filters
function ShoppingList({ items: initialItems }) {
  // State to manage the list of items, initialized with prop
  const [items, setItems] = useState(initialItems);
  // State to manage selected category filter
  const [selectedCategory, setSelectedCategory] = useState("All");
  // State to manage search term
  const [searchTerm, setSearchTerm] = useState("");

  // Handle category filter change
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  // Handle search term change
  function handleSearchChange(event) {
    setSearchTerm(event.target.value);
  }

  // Handle new item submission from ItemForm
  function handleItemFormSubmit(newItem) {
    setItems([...items, newItem]); // Add new item to the items array
  }

  // Filter items based on category and search term
  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true; // Show all items if category is "All"
    return item.category === selectedCategory; // Filter by selected category
  }).filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase())); // Filter by search term

  return (
    <div className="ShoppingList">
      {/* Form to add new items */}
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      {/* Filter component for category and search */}
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} search={searchTerm} />
      {/* List of items to display */}
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;