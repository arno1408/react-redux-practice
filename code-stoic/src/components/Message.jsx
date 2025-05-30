function Message() {
  const getMessage = () => {
    console.log("You've got a message!");
  };

  return <button onClick={getMessage}>Click To Get a Messege!</button>;
}

export default Message;
