import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [menuItem, setMenyItems] = useState(items);
  const [categories, setCatogories] = useState([]);
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our menu</h2>
          <div className="underline"> </div>
        </div>
        <Categories />
        <Menu items={menuItem}/>
      </section>
    </main>
  );
}

export default App;
