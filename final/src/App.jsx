

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: true }
];


function App() {
  

  return (
    <div className='app'>
   <Logo/>
   <Form/>
   <PackingList/>
   <Stats/>
    </div>
  )
}

export default App


function Logo (){
  return (
  
      <h1> 🏝️ Far Away 🧳</h1>
    
  )

}



function Form(){

  function handleSubmit(e){
  e.preventDefault();
  alert("add")
  }

return(
  <form className='add-form' onSubmit={handleSubmit}>
   <h3> what do you need 😍 for your trip?</h3>
   <select>
    {Array.from({length:20},(_,i)=> i+1).map((num)=>(
      <option key={num} value={num}>{num}</option>
    ))
    }
   </select>
   <input  type="text" placeholder="Item..."/>
   <button>Add</button>
  </form>
)
}

function PackingList(){
return(
  
    <div className="list">
      <ul>
      {initialItems.map((item)=>
        (<Item item={item} key={item.id}/>))}
      </ul>
     
    </div>
  
)
}

function Item({item}){
  return(
    <li key={item.id} style={item.packed ? {textDecoration :"line-through"} : {}}>
      <span>{item.quantity} {item.description}</span>
      <button > X </button>
    </li>
  )
}

function Stats(){
return(
  <footer className='stats'>
    <em> you have X items on your list, and you already packed X%</em>
   
  </footer>
)
}