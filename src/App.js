import { Link } from "react-router-dom";

function App() {
  return (
    <>

    <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/">Home </Link>|{" "}
        <Link to="/first">First</Link> |{" "}
        <Link to="/second">Home</Link>
      </nav>
      
      <h2>Home content</h2>
    </>
  );
}

export default App;
