import { useState } from "react";

 
 
 export default function PackingList({ items, onDelet, onToggleItem ,onClear}) {
    const [sortBy,setSortBy] = useState('input');
    let sortedItem ;
    if(sortBy === 'input') sortedItem=items
  
    if(sortBy === 'description') sortedItem =items.slice().sort((a,b)=>a.desc.localeCompare(b.desc))
    
    if(sortBy === 'packed') sortedItem = items.slice().sort((a,b)=> Number(b.packed) - Number(a.packed)) 
  
  
  
    return (
      <div className="list">
        <ul>
          {sortedItem.map((item) => (
            <Item
              item={item}
              key={item.id}
              onDelet={onDelet}
              onToggleItem={onToggleItem}
            />
          ))}
        </ul>
        <div className="actions">
          <select value={sortBy} onChange={(e)=> setSortBy(e.target.value)}>
            <option value='input'>sort by input order</option>
            <option value='description'>sort by description</option>
            <option value='packed'>sort by packed status </option>
          </select>
          <button onClick={onClear}>clear list</button>
        </div>
        
      </div>
    );
  }
  