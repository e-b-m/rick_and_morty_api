import Character from "./Character";

const CharacterList = ({ characters }) => {
  const characterComponents = characters.map((character) => {
    return <Character key={character.id} character={character} />;
  });

  //takes in a prop character

  return (
    <div id="characters">
     
      {characterComponents}
    </div>
  );
};

export default CharacterList;
