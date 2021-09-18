import './App.css';
// import logo from './logo.svg';

function App() {
  // creating object 
  const singer = {
  name: "Kawsar",
  age:"24"
  }
  // destructuring 
  const {name, age} = singer
  return (
    <div className="App">
      <h1>Hello react</h1>
      <p>Singer Name: {name} and Singer Age: { age}</p>
    </div>
  );
}

export default App;
