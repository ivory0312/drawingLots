import "./Input.css";

const Input = () => {
  const count = localStorage.getItem("count");

  return (
    <div className="main">
      <div className="title">선택지를 입력해주세요</div>
    </div>
  );
};

export default Input;
