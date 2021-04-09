function Gate(props) {
  return <div>Gate is {props.active == true ? <p>Open</p> : <p>Close</p>}</div>;
}

export default Gate;
