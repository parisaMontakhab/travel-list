

export default function Item({ item, onDelet, onToggleItem }) {
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