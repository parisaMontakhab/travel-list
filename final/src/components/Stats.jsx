export default function Stats({ items }) {
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
  