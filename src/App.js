import './App.css';
// import logo from './logo.svg';






function App() {
  const products = [
    {name: 'mobile', price: 15000 },
          {name: 'camera', price: 55000 },
          {name: 'laptop', price: 150000 },
          {name: 'watch', price: 5000 },
          {name: 'shoe', price: 500 },
          ]

  // creating object 
  const singer = {
  name: "Kawsar",
  age:"24"
  }
  // destructuring 
  const { name, age } = singer
  const singerStyle = {
    backgroundColor: "purple",
    color: "white",
    // height: "80px",
    margin: '0 20%',
    padding: "15px",
    borderRadius: "12px",
    // width:"50px"
   
  }
  return (
    <div className="App">
      <h1>Hello react</h1>
<h3>1. jsx , Dynamic Content , Dynamic Style In React </h3>
      <p style={singerStyle}>
       
        Singer Name: {name} and Singer Age: {age}</p>
      <h1>45-3 Create Component, Return Html From A Component</h1>
      {/* personal component  */}
      <Person name= "Suzy" job = "actress" ></Person>
      <Person name= "Kim go yun" job = "actress"></Person>
      <Person name= "Park min young" job = "actress"></Person>

      <h1>45-4 Pass Dynamic Data To Components, Props In React</h1>
      <Friends phone = "0125147" address="Dhaka"></Friends>
      <Friends phone="2154788" address="Chandpur"></Friends>
      {/* array data  */}
      <Arraydata></Arraydata>
          {
            products.map(product => <Product name={product.name} price={product.price}></Product>)
          }
    </div>
  );
}
// component function 
function Person(props) { // passing parameter 
  console.log(props)
  const {name, job} = props
  return (
    <div className="styleee">
      <h1>Name: { name}</h1>
      <h4>Proffession: { job}</h4>
      
    </div>
  )
}

function Friends(props) {
  return (
    <div className="styleee">
      <h1>Phone: {props.phone}</h1>
      <h3>Address: {props.address}</h3>
    </div>
  )
}
function Arraydata() {
  const nayoks = ["re", "kfdjlds", "sdklfkldsj", "djfdlslre"]
    const cinemas = [
    { nayok: 'Koober', nayika: 'kopila' },
    { nayok: 'Rubel', nayika: 'Moushumi' },
    { nayok: 'Razzak', nayika: 'Shabana' },
    { nayok: 'Jashim', nayika: 'Suchorita' },

  ]
  return (
    <>
  <h1>45-5 (Advanced) Create Multiple Components From An Array Of Objects</h1>
    <div className="styleee">
        <ul>
          <li>{nayoks[0]}</li>
          <li>{nayoks[1]}</li>
          <li>{nayoks[2]}</li>
        </ul>
        {/* dynamic  */}
        <ul>
          {
              nayoks.map(nayok => <li>{nayok}</li>)
          }
        </ul>
          {
        cinemas.map(cinema => <Cinema nayok={cinema.nayok} nayika={cinema.nayika}></Cinema>)
      }
      {/* <Product></Product> */}
      </div>
      </>
  )
}
function Cinema(props) {
  return (
    <div className="styleee">
      <h2>Nayok: {props.nayok}</h2>
      <h4>Nayika: {props.nayika}</h4>
    </div>
  )
}

function Product(props) {
  const productStyle = {
    border: '3px solid blue',
    borderRadius: '10px'
  }
  return (
    <div className="product" style={productStyle}>
      <h2>Name: {props.name}</h2>
      <h4>Price: {props.price}</h4>
    </div>
  )
}
export default App;
