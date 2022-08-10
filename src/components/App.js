import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isOn, setIsOn] = useState(false)
  const [items, setItems] = useState(itemData)

  const filterItems = (filterValue) => {
    if (filterValue === 'All') {
      setItems(itemData)
    } else {
      setItems(itemData.filter(item => {
        return item.category === filterValue
      }))

    }
  }

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = isOn ? "App dark" : "App light"

  const toggleDarkMode = () => {
    setIsOn(!isOn)
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleDarkMode}>{isOn ? "Dark Mode" : "Light Mode"}</button>
      </header>
      <ShoppingList items={items} filterItems={filterItems} />
    </div>
  );
}

export default App;
