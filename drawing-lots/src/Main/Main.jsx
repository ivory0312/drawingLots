import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Main.css";

function Main() {
  const [count, setCount] = useState(1);
  const navigate = useNavigate();

  const minus = () => {
    setCount(count > 1 ? count - 1 : count);
  };
  const plus = () => {
    setCount(count < 5 ? count + 1 : count);
  };
  const goToNext = () => {
    localStorage.setItem("count", count);
    console.log(count);
    navigate("/input");
  };

  return (
    <div className="main">
      <div className="title">선택지는 몇 개인가요?</div>
      <div className="count">
        <button onClick={minus}>-</button>
        {count}
        <button onClick={plus}>+</button>
      </div>
      <div className="button" onClick={goToNext}>
        다음으로
      </div>
    </div>
  );
}

export default Main;
