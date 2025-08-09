import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

// App component as the main application container
function App() {
  // State to manage the list of items
  const [items, setItems] = useState(itemData);

  return (
    <div className="App">
      {/* Render the ShoppingList component with initial items */}
      <ShoppingList items={items} />
    </div>
  );
}

export default App;