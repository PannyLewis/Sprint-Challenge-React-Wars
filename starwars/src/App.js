import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Character from "./components/Character";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((response) => {
        console.log(response);
        setCharacters(response.data.results);
        console.log(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      {characters.map((character, index) => {
        return <Character key={index} character={characters} />;
      })}
    </div>
  );
};

export default App;
