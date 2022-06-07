import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(1);

  const minus = () => {
    setCount(count > 1 ? count - 1 : count);
  };
  const plus = () => {
    setCount(count < 5 ? count + 1 : count);
  };

  return (
    <div className="App">
      <div className="title">선택지는 몇 개인가요?</div>
      <div className="count">
        <button onClick={minus}>-</button>
        {count}
        <button onClick={plus}>+</button>
      </div>
      <div className="button" onClick>
        다음으로
      </div>
    </div>
  );
}

export default App;
