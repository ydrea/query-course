import logo from "./logo.svg";
import "./App.css";
import { useQuery } from "react-query";
import { useState } from "react";

//donesi
//
const getProducts = (rep) => {
return fetch(`https://api.github.com/repos/${rep}`)
.then(rez => rez.json())
};

function App() {
  //
  const { data, isLoading, error } = useQuery(["gita", "facebook/react"], () =>
    getProducts("facebook/react")
  );
  console.log(data);
  //provjeri
  // const checkIt = () => {
    if (isLoading) return <p>loading...</p>;
    if (error) return <div> Greška </div>;
  // };

  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
