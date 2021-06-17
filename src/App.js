//imports
import "./App.css";
import { useQuery } from "react-query";
import { useState } from "react";

//components
import ThePost from "./ThePost";

//donesi
const getProducts = (url) => fetch(url).then((rez) => rez.json());

function App() {
  //postavi search
  const [trazi, traziSet] = useState("");

  //postavi post
  const [thePost, thePostSet] = useState(null);

  //useQuery
  const { data: posts, isLoading } = useQuery("posts", () =>
    getProducts(`https://jsonplaceholder.typicode.com/posts`)
  );
  console.log(posts);
  //provjeri
  // const checkIt = () => {
  if (isLoading) {
    return (
      <div className="App">
        <header className="App-header">Loading...</header>
      </div>
    );
    // if (error) return <div> Greška </div>;
  }

  if (thePost !== null) {
    return <ThePost thePost={thePost} 
    goBack={()=>thePostSet(null)}
    />;
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
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <a onClick={() => thePostSet(post.id)} href="#">
              {post.id}: {post.title}
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default App;
