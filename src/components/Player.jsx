import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setEditing] = useState(false);

  function handleEditClick() {
    setEditing((editing) => !editing);
  }

  let playerName = <span className="player-name">{name}</span>;
  let buttonCaption = "Edit";

  if (isEditing) {
    playerName = <input type="text" name="" id="" required />;
    buttonCaption = "Save";
  }

  return (
    <>
      <li>
        <span className="player">
          {/* {isEditing ? (
            <input></input>
          ) : (
            <span className="player-name">{name}</span>
          )} */}
          {playerName}
          <span className="player-symbol">{symbol}</span>
          <button onClick={handleEditClick}>
            {buttonCaption}
            {/* {isEditing ? "Save" : "Edit"} */}
          </button>
        </span>
      </li>
    </>
  );
}
