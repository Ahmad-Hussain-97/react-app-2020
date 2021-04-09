import React from "react";
import ReactDOM from "react-dom";

function H1() {
  return <div>Hello World 1</div>;
}
function H2() {
  return <div>Hello World 2</div>;
}
function H3() {
  return <div>Hello World 3</div>;
}

function H4() {
  return <div>Hello World 4</div>;
}
function H5() {
  return <div>Hello World 5</div>;
}

ReactDOM.render(
  <div>
    <H1 />
    <H2 />
    <H3 />
    <H4 />
    <H5 />
  </div>,
  document.getElementById("root")
);
