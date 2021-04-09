import React from "react";
import ReactDOM from "react-dom";
import MediaCard from "./MediaCard";
import Gate from "./Gate";

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
    <Gate active={true} cardNumber={1} />
  </div>,
  document.getElementById("root")
);
