import React, { useState } from "react";
import { v4 as uuid } from "uuid";

// ItemForm component to handle adding new items to the shopping list
function ItemForm(props) {
  // State for item name, initialized as empty string
  const [itemName, setItemName] = useState("");
  // State for item category, initialized to "Produce" as default
  const [itemCategory, setItemCategory] = useState("Produce");

  // Handle form submission to add new item
  function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission
    const newItem = {
      id: uuid(), // Generate unique ID for new item
      name: itemName,
      category: itemCategory,
    };
    props.onItemFormSubmit(newItem); // Pass new item to parent component
    setItemName(""); // Reset name input
    setItemCategory("Produce"); // Reset category to default
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        {/* Controlled input for item name */}
        <input type="text" name="name" value={itemName} onChange={(e) => setItemName(e.target.value)} />
      </label>
      <label>
        Category:
        {/* Controlled select for item category */}
        <select name="category" value={itemCategory} onChange={(e) => setItemCategory(e.target.value)}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>
      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;