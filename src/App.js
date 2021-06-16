import logo from "./logo.svg";
import "./App.css";
import { useQuery } from "react-query";
import { useState } from "react";

//donesi
//
const getProducts = (url) => fetch(url).then(
    (rez) => rez.json()
  );

function App() {
  //postavi search
  const [trazi, traziSet] = useState("");
  //
  const { data: posts, isLoading } = useQuery("posts", () =>
    getProducts(`https://jsonplaceholder.typicode.com/posts`)
  );
  console.log(posts);
  //provjeri
  // const checkIt = () => {
  if (isLoading) {
    return (
      <div className="App">
        <header className="App-header">
          {/* <input
            type="text"
            value={trazi}
            onChange={(e) => traziSet(e.target.value)}
          /> */}
          Loading...
        </header>
      </div>
    );

    // if (error) return <div> Greška </div>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <input
          type="text"
          value={trazi}
          onChange={(e) => traziSet(e.target.value)}
        />
      </header>
      {posts.map( 
        post => {
        return <div key={post.id}> {post.id} : {post.title} </div>
        }
      )}
    </div>
  );
}

export default App;
