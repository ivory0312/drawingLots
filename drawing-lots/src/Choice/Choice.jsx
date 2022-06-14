import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Item from "../item.svg";
import "./Choice.css";

const Choice = () => {
  const [isOpen, setIsOpen] = useState(false);
  const count = Number(localStorage.getItem("count"));
  const array = localStorage.getItem("array");
  const items = array.split(",");
  const navigate = useNavigate();

  const openModal = () => {
    setIsOpen(true);
  };

  const getResult = () => {
    const randNum = Math.floor(Math.random() * (count - 1 + 1)) + 1;
    return randNum - 1;
  };

  const goToNext = () => {
    setIsOpen(false);
    navigate("/");
  };

  const retry = () => {
    setIsOpen(false);
  };

  return (
    <div className="main">
      <div className="title">
        쪽지를 골라주세요
        <div className="info">쪽지의 순서는 결과와 상관이 없습니다</div>
      </div>
      <div className="items">
        {items.map(() => (
          <div className="item" onClick={openModal}>
            <img src={Item} />
          </div>
        ))}
      </div>
      <div className={isOpen ? "background show" : "background"}>
        <div className="window">
          <div className="popup">
            <div className="text">{items[getResult()]}</div>
            <div className="buttons">
              <div className="retryButton" onClick={retry}>
                다시하기
              </div>
              <div onClick={goToNext}>처음으로</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choice;
