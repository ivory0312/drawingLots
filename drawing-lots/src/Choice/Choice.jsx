import Item from "../item.svg";
import "./Choice.css";

const Choice = () => {
  const count = Number(localStorage.getItem("count"));
  const array = Array.from({ length: count }, () => 0);

  return (
    <div className="main">
      <div className="title">쪽지를 골라주세요</div>
      <div className="items">
        {array.map(() => (
          <img src={Item} />
        ))}
      </div>
    </div>
  );
};

export default Choice;
