import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';


const productArray=[
  {name: 'Photoshop', price:'$89.99'},
  {name: 'Illustratoor', price:'$39.99'},
  {name: 'Acrobat Pro', price:'$25.99'},
  {name: 'Lightroom', price:'$19.99'},
  
]


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{color : 'red'}}>I am React Web Developer</h1>
      <ul>
        {
        productArray.map(product => <li>{product.name}</li>)}
      </ul>
      <Counter></Counter>
      <Users></Users>

      <Products name={productArray[0].name}price={productArray[0].price} ></Products>
      <Products name={productArray[1].name}price={productArray[1].price} ></Products>
      <Products name={productArray[2].name}price={productArray[2].price} ></Products>
      <Products name={productArray[3].name} price={productArray[3].price}></Products>


     
      </header>
    </div>
  );
}

function Products(props){
  const productStyle={
    backgroundColor:'lightgray',
    borderRadius: '10px',
    padding:'10px',
    color:'black',
    margin:'10px',
    height:'200px',
    width:'200px',
    boxShadow:'5px 5px orange'

  }
  const buybutton={
    borderRadius:'5px',
    backgroundColor:'blue',
    padding:'2px 5px',
    color:'white'
  }
  const {name, price}= props; // :: using destructure.
  

  return(
  <div style={productStyle}>
    <h3 >{name}</h3>
    <h3 style={{color:'green'}}>{price}</h3>
    <button style={buybutton}>Buy now</button>
  </div>
  )
}


function Counter (){
  const counterColor = {
    backgroundColor:"red",
    borderRadius:'5px',
    margin:'5px',
    color:'white',
    
    
  }

  
  const [Counter,setCounter] = useState(0);
  const handleIncrease = () => setCounter(Counter+1)
  
  /* We can also write briefly::
  {
    const newCount = Counter + 1;
    setCounter(newCount);
    };
  */

  const handleDecrease = () => setCounter(Counter-1);
   
  /* We can also write briefly::
  {
    const newCount = Counter - 1;
    setCounter(newCount);
    
  };
  */
  

  return(
    <div style={counterColor}>
      <h3>Counter: {Counter}</h3>
      <button style={counterColor} onClick={handleIncrease}>Increase</button>
      <button style={counterColor} onClick={handleDecrease}>Decrease</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect (() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUsers(data));
  },[])

  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
        <ul>
          {
            users.map(user => <li>{user.name}</li>)
            
          }
          {
            users.map(userr => <li>{userr.phone}</li>)
          }
          </ul>
    
    </div>
  )
}



  
  
  


export default App;
