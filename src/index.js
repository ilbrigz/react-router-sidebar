import React from "react";
import ReactDOM from "react-dom";
import SideBar from "./SideBar";

function App() {
  return (
    <div className="App">
      <SideBar />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
