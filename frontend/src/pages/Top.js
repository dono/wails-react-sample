import React, { useState } from "react";
import { Card } from "react-bootstrap";

import "./Top.css";

const Top = () => {
  // const [result, setResult] = useState("Please enter your name below 👇");
  // const [name, setName] = useState("");

  // const greet = () => {
  //   window.go.main.App.Greet(name).then((result) => {
  //     setResult(result);
  //   });
  // };

  // const handleChange = (event) => {
  //   setName(event.target.value);
  // };

  return (
    <>
      <p>hoge</p>
      <Card>
        <Card.Text>Fuga</Card.Text>
      </Card>
    </>
    // <>
    //   <div className="logo" />
    //   <div className="result">{result}</div>
    //   <div className="input-box" data-wails-no-drag>
    //     <input className="input" type="text" autoComplete="off" value={name} onChange={handleChange} />
    //     <button className="btn" onClick={greet}>Greet</button>
    //   </div>
    // </>
  );
};

export default Top;
