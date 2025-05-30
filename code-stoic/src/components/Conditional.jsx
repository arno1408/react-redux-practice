import Welcome from "./Welcome";

import LogIn from "./LogIn";

function Conditional() {
  let conditionLogIn = false;
  // if (conditionLogIn) {
  //   return <h4>Welcome</h4>;
  // } else {
  //   return <h4>You need to log in</h4>;
  // }

  // if (conditionLogIn) {
  //   return <Welcome />;
  // } else {
  //   return <LogIn />;
  // }

  // let message;

  // if (conditionLogIn) {
  //   message = <Welcome />;
  // } else {
  //   message = <LogIn />;
  // }

  // return message;

  return conditionLogIn ? <Welcome /> : <LogIn />;
}

export default Conditional;
