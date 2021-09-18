import './App.css';
// import logo from './logo.svg';

function App() {
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

export default App;
