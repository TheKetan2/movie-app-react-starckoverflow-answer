import React, { useState } from "react";
import Axios from "axios";

const APIKEY = "62316cb7";
export default function App() {
  const [searchText, setSearchText] = useState("");
  const [films, setFilms] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!searchText) {
      alert("Please enter movie name");
      return;
    }
    Axios.get(
      `http://www.omdbapi.com/?i=tt3896198&apikey=${APIKEY}&s=${searchText}`
    )
      .then((response) => {
        console.log(response.data);
        setFilms(response.data.Search);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          placeholder={"Search movie"}
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
        />
        <button>Search</button>
      </form>
      <div className="movieContainer">
        {films.map((film) => (
          <div className="filmCard">
            <img src={film["Poster"]} width={200} alt={film["Title"]} />
            <p>{film["Title"]}</p>
            <p>{film["Year"]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
