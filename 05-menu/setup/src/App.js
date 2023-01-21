import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [menuItem, setMenyItems] = useState(items);
  const [categories, setCatogories] = useState([]);
  const filterItems = (category) => {
    if (category === 'all') {
      setMenyItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenyItems(newItems);
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our menu</h2>
          <div className="underline"> </div>
        </div>
        <Categories filterItems={filterItems} />
        <Menu items={menuItem} />
      </section>
    </main>
  );
}

export default App;
