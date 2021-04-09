function Gate(props) {
  let Open = props.active;
  function ToggelGate() {
    Open = !Open;
    console.log("Open value is", Open);
  }
  return (
    <div>
      {Open == true ? <p>Gate is Open</p> : <p>Gate is Closed</p>}
      <button onclick={ToggelGate}>Toggle</button>
    </div>
  );
}

export default Gate;
