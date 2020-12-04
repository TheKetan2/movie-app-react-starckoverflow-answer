import React, { useState } from "react";
import Axios from "axios";
import APIKEY from "./keys/keys";

export default function App() {
  const [searchText, setSearchText] = useState("");
  const [films, setFilms] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSearching(true);
    setFilms([]);

    if (!searchText) {
      alert("Please enter movie name");
      return;
    }
    Axios.get(
      `https://www.omdbapi.com/?i=tt3896198&apikey=62316cb7&s=${searchText}`
    )
      .then((response) => {
        console.log(response.data);
        setFilms(response.data.Search);
        setIsSearching(false);
      })
      .catch((error) => {
        console.log(error);
        setIsSearching(false);
      });
  };
  return (
    <div className="App">
      <form className="input" onSubmit={handleSubmit}>
        <input
          placeholder={"Search movie"}
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
        />
        <button>Search</button>
      </form>
      <div className="movieContainer">
        {isSearching ? (
          <p>Loading</p>
        ) : (
          films.map((film) => (
            <div className="filmCard">
              <img src={film["Poster"]} width={200} alt={film["Title"]} />
              <div className="textBox">
                {" "}
                <p className="title">{film["Title"]}</p>
                <p className="year">Released: {film["Year"]}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
