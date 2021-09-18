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
    height: "80px",
    margin: '0 20%',
    padding: "15px",
    borderRadius: "12px",
    // width:"50px"
   
  }
  return (
    <div className="App">
      <h1>Hello react</h1>

      <p style={singerStyle}>
       <h3>1. jsx , Dynamic Content , Dynamic Style In React </h3>
        Singer Name: {name} and Singer Age: {age}</p>
      <h1>45-3 Create Component, Return Html From A Component</h1>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
    </div>
  );
}
function Person() {
  return (
    <div>
      <h1>Md. Kawsar Hossain</h1>
    </div>
  )
}

export default App;
