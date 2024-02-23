import "./App.css";
import Navbar from "./components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./redux/counter/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <Navbar count={count} />
      <button onClick={() => dispatch(decrement())}>-</button>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
    </>
  );
}

export default App;
