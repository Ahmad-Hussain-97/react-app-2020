import React from "react";
import ReactDOM from "react-dom";
import MediaCard from "./MediaCard";

// function H1(arg) {
//   return (
//     <div>
//       <h1>{arg.title}</h1>
//       <p>{arg.para}</p>
//     </div>
//   );
// }

ReactDOM.render(
  <div>
    <MediaCard
      title="Hello React App! using media card!"
      para="This is the paragraph to be shown in p tag"
    />
  </div>,
  document.getElementById("root")
);
