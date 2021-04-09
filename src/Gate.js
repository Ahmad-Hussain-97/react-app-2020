import React from "react";

function Gate(props) {
  const [Open, ToggelGate] = React.useState;
  //   let Open = props.active;
  //   function ToggelGate() {
  //     Open = !Open;
  //     console.log("Open value is", Open);
  //   }
  return (
    <div>
      Gate is <span id="state"> {Open == true ? "Open" : "Closed"}</span>
      <button onclick={() => ToggelGate(!Open)}>Toggle</button>
    </div>
  );
}

export default Gate;
