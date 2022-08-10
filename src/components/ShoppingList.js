import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items,filterItems }) {

  let [selectedCategory, setSelectedCategory] = useState("All")

  const handlefilter = (e) => {
    selectedCategory = e.target.value
    filterItems(selectedCategory)
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handlefilter}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} onChange={handlefilter} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
