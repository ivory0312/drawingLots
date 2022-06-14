import { useNavigate } from "react-router-dom";
import Icon from "../inputIcon.svg";
import "./Input.css";

const Input = () => {
  const count = Number(localStorage.getItem("count"));
  const array = Array.from({ length: count }, (v, i) => i);
  const navigate = useNavigate();

  const handleInput = (e, data) => {
    array[data] = e.target.value;
  };

  const goToNext = () => {
    localStorage.setItem("array", array);
    navigate("/choice");
  };

  return (
    <div className="main">
      <div className="title">선택지를 입력해주세요</div>
      <div className="textField">
        {array.map((data) => (
          <div className="box">
            <img src={Icon} />
            <input type="text" onChange={(e) => handleInput(e, data)} />
          </div>
        ))}
      </div>
      <div className="nextButton" onClick={goToNext}>
        다음으로
      </div>
    </div>
  );
};

export default Input;
