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
  //postavi search
  const [trazi, traziSet] = useState('')
  //
  const { data, isLoading, error } = useQuery(["gita", trazi], () =>
    getProducts(trazi)
  );
  console.log(data);
  //provjeri
  // const checkIt = () => {
    if (isLoading) {  
      return <div className="App">
    <header className="App-header">
      <input type='text' value={trazi} onChange={e => traziSet(e.target.value)}/>
    </header>
  </div>

    // if (error) return <div> Greška </div>;
  };

  return (
    <div className="App">
      <header className="App-header">
        <input type='text' value={trazi} onChange={e => traziSet(e.target.value)}/>
      </header>
    </div>
  );
}

export default App;
