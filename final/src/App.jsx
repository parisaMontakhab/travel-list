import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

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








