import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Item from "../item.svg";
import "./Choice.css";

const Choice = () => {
  const [isOpen, setIsOpen] = useState(false);
  const count = Number(localStorage.getItem("count"));
  const array = Array.from({ length: count }, () => 0);
  const navigate = useNavigate();

  const openModal = () => {
    setIsOpen(true);
  };

  const goToNext = () => {
    setIsOpen(false);
    navigate("/");
  };

  return (
    <div className="main">
      <div className="title">쪽지를 골라주세요</div>
      <div className="items">
        {array.map(() => (
          <div className="item" onClick={openModal}>
            <img src={Item} />
          </div>
        ))}
      </div>
      <div className={isOpen ? "background show" : "background"}>
        <div className="window">
          <div className="popup">
            <div className="text">hi</div>
            <div className="nextButton" onClick={goToNext}>
              처음으로
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choice;
