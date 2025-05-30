// const name = "Arno";

function displayMsg(name, msg) {
  return "Display Msg!";
}

function Hello({ obj }) {
  // console.log(props);

  // const { name, msg } = props;
  return (
    <>
      {/* <div>
        {props.msg}
        {props.name}{" "}
      </div> */}

      <div>
        {obj.msg} {obj.name}
      </div>
      <div>{obj.arr}</div>
      <div>{2 + 3} is the sum of 2 and 3</div>
      <div>This is set by a function called {displayMsg()}</div>
    </>
  );
}

export default Hello;
