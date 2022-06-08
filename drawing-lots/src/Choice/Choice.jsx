import Item from "../item.svg";
import "./Choice.css";

const Choice = () => {
  const count = Number(localStorage.getItem("count"));
  const array = Array.from({ length: count }, () => 0);

  function show() {
    document.querySelector(".background").className = "background show";
  }

  function close() {
    document.querySelector(".background").className = "background";
  }

  document.querySelector("#show").addEventListener("click", show);
  document.querySelector("#close").addEventListener("click", close);

  return (
    <div className="main">
      <div className="title">쪽지를 골라주세요</div>
      <div className="items">
        {array.map(() => (
          <img src={Item} onClick={show} />
        ))}
      </div>
      <div className="background">
        <div className="window">
          <div className="popup">
            <button id="close" onClick={close}>
              close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choice;
