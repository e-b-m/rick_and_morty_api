import { useEffect, useState } from "react";
import CharacterList from "../components/CharacterList";

const CharacterContainer = () => {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [maximumPages, setMaximumPages] = useState();

  useEffect(() => {
    // console.log("hello")
    fetch(`https://rickandmortyapi.com/api/character?page=${currentPage}`)
      .then((response) => response.json())
      .then((response) => {
        setCharacters(response.results);
        setMaximumPages(response.info.pages);
      })
      .catch((err) => setError(err.message));
  }, [currentPage]);
  // whenever the page changes it triggers the useEffect

  const nextButton = () => {
    if (currentPage < maximumPages) {
      return (
        <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
      );
    }
  };

  const previousButton = () => {
    if (currentPage > 1) {
      return (
        <button onClick={() => setCurrentPage(currentPage - 1)}>
          Previous
        </button>
      );
    }
  };

  if (error !== "") return <p>Error!</p>;

  return (
    <>
      {previousButton()}
      {nextButton()}
      <CharacterList characters={characters} />
    </>
  );
};

export default CharacterContainer;
