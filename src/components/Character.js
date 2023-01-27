import { useState } from "react";
import "./style.css";
const Character = ({ character }) => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const showInfo = () => {
    return (
      <div>
        <p>
          {" "}
          <b>Character-Status:</b> {character.status}
        </p>
        <p>
          {" "}
          <b>Character Location: </b>
          {character.origin.name}
        </p>
      </div>
    );
  };

  return (
    <div className="character">
      <h3>{character.name}</h3>
      <p>{character.species}</p>

      <div className="character-buttons">
        <img src={character.image}></img>
        <button onClick={() => setShowMoreInfo(!showMoreInfo)}>
          {showMoreInfo === true ? "Hide" : "Show"}
        </button>
        {showMoreInfo === true && showInfo()}
      </div>
    </div>
  );
};
export default Character;
