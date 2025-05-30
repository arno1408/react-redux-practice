import Conditional from "./components/Conditional";
import Counter from "./components/Counter";
import Form from "./components/Form";
import Hello from "./components/Hello";
import List from "./components/List";
import Message from "./components/Message";
function App() {
  let obj = {
    name: "Arno",
    msg: "Hi There!",
    arr: [1, 4, 7],
  };

  // let arr = [1, 4, 7];
  return (
    <>
      <h2>hello world</h2>
      {/* <Hello name="arno" msg="hi there!" /> <br /> */}
      {/* <Hello name="arno" msg="hi there!" setArr={arr} /> <br /> */}
      <Hello obj={obj} />
      <List />
      <Conditional />
      <br />
      <Message />
      <br />
      <Counter /> <br /> <br />
      <Form />
    </>
  );
}

export default App;
