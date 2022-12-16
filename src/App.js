import { useDispatch, useSelector } from "react-redux";
import { decrementCounterActionCreator, incrementCounterActionCreator, resetCounterActionCreator } from "./states/counter/action";

function App() {
  const counter = useSelector((states) => states.counter)
  const dispatch = useDispatch();
  
  const onIncrement = () => {
    dispatch(incrementCounterActionCreator())
  }
  const onDecrement = () => { 
    dispatch(decrementCounterActionCreator())
  }
  
  const onReset = () => { 
    dispatch(resetCounterActionCreator())
  }
  return (
    <div className="App">
      {counter}
      <div>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
        <button onClick={onReset}>reset</button>
      </div>
    </div>
  );
}

export default App;
