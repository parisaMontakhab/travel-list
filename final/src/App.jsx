import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeletItem(id) {
    const filtredArray = items.filter((i) => i.id !== id);
    setItems(filtredArray);
  }

  function handleToggleItem(id) {
    // setItems((items)=> items.map((item)=> item.id === id ? {...item, packed: !item.packed} : item));
    const newItem = items.map((item) =>
      item.id === id ? { ...item, packed: !item.packed } : item
    );
    setItems(newItem);
  }

  function handleClearList (){
  setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackingList
        items={items}
        onDelet={handleDeletItem}
        onToggleItem={handleToggleItem}
        onClear={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;






function Item({ item, onDelet, onToggleItem }) {
  return (
    <li
      key={item.id}
      style={item.packed ? { textDecoration: "line-through" } : {}}
    >
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span>
        {item.quantity} {item.desc}
      </span>
      <button onClick={() => onDelet(item.id)}> X </button>
    </li>
  );
}

function Stats({ items }) {
  if(!items.length) 
    return(
  <em className="stats">start adding some items to your packing list</em>
  )
  const numberOfItems = items.length;
  const numberOfPacked = items.filter((item) => item.packed).length;
  const percent = Math.round((numberOfPacked / numberOfItems) * 100);
  return (
    <footer className="stats">
      <em>
       
       { percent===100 ? "You are redy for Trip :)"  :   ` you have ${numberOfItems} items on your list, and you already packed
        ${numberOfPacked} (${percent}%)`}
      </em>
    </footer>
  );
}
