import { useState } from "react";

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

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackingList
        items={items}
        onDelet={handleDeletItem}
        onToggleItem={handleToggleItem}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;

function Logo() {
  return <h1> 🏝️ Far Away 🧳</h1>;
}

function Form({ onAddItems }) {
  const [desc, setDesc] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!desc) return;
    const newItem = { desc, quantity, packed: false, id: new Date() };

    onAddItems(newItem);
    setDesc("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3> what do you need 😍 for your trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function PackingList({ items, onDelet, onToggleItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDelet={onDelet}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
    </div>
  );
}

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
