import { Link } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <main>
      <h1 className="h1">Home</h1>
      <Link className="btn" to={"/ProfilPage"}><h1>ProfilPage</h1></Link>
    </main>
  );
}

export default App;
