import logo from "./logo.svg";
import "./App.css";
import { useQuery } from "react-query";
import { useState } from "react";

const HideandSeek = () => {
  const {
    data,
    error,
    // , isLoading, isError, isSuccess, isIdle
  } = useQuery("zeko", () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(Math.random()), 5000);
    });
  });
 
  const [vidi, vidiSet] = useState(true);

  const pajiGasi = () => {
    vidiSet((vidi) => !vidi);
  };

  console.log(data, error);

  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />

      <button onClick={pajiGasi}>paji/gasi</button>
      {vidi && <HideandSeek />}
    </div>
  );
};
