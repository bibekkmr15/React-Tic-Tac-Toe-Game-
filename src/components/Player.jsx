import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [isEditing, setEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleEditClick() {
    setEditing((editing) => !editing);
  }

  function handleInputChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  let buttonCaption = "Edit";

  if (isEditing) {
    editablePlayerName = (
      <input
        type="text"
        value={playerName}
        required
        onChange={handleInputChange}
      />
    );
    buttonCaption = "Save";
  }

  return (
    <>
      <li className={isActive ? "active" : undefined}>
        <span className="player">
          {editablePlayerName}
          <span className="player-symbol">{symbol}</span>
          <button onClick={handleEditClick}>{buttonCaption}</button>
        </span>
      </li>
    </>
  );
}
