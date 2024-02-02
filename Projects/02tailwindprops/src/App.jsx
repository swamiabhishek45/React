import './App.css'
import Card from './components/Card';

function App() {

  let obj = {
    username: "Abhi",
    email: "abhijit2406@gmail.com"
  }

  return (
    <>
      <h1 className="bg-green-400 text-black mb-4 p-3 rounded-md">Hello world!</h1>
      <Card username="Abhi" myObj={obj} btnText="Click Me" />
      <Card username="Suraj" myObj={obj} btnText="Visit Me" />
    </>
  );
}

export default App
