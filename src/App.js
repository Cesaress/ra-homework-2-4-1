// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import "./App.css";

import List from "./components/List.js";
import Details from "./components/Details.js";

export default function App() {
  const url = process.env.REACT_APP_URL;
  const [currentId, setCurrentId] = useState();

  const handleClick = (id) => {
    if (currentId !== id) {
      setCurrentId(id);
    }
  };

  return (
    <React.Fragment>
      <List url={url} onClickItem={handleClick} />
      {currentId && <Details url={url} dataId={currentId} />}
    </React.Fragment>
  );
}