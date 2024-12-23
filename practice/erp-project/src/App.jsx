import "./App.css";
import { Button } from "react-bootstrap";

function App() {
  return (
    <>
      <h1>hello</h1>;{/* Bootstrap class usage */}
      <h1 className="text-primary">Bootstrap and React-Bootstrap</h1>
      {/* React-Bootstrap component */}
      <Button variant="success">React-Bootstrap Button</Button>
      {/* Bootstrap Icons */}
      <i className="bi bi-check-circle text-success ms-3"></i>
    </>
  );
}

export default App;
