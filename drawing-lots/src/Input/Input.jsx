import { useNavigate } from "react-router-dom";
import Icon from "../inputIcon.svg";
import "./Input.css";

const Input = () => {
  const count = Number(localStorage.getItem("count"));
  const array = Array.from({ length: count }, () => 0);
  const navigate = useNavigate();

  const goToNext = () => {
    navigate("/choice");
  };

  return (
    <div className="main">
      <div className="title">선택지를 입력해주세요</div>
      <div className="textField">
        {array.map(() => (
          <div className="box">
            <img src={Icon} />
            <input type="text" />
          </div>
        ))}
      </div>
      <div className="button" onClick={goToNext}>
        다음으로
      </div>
    </div>
  );
};

export default Input;
