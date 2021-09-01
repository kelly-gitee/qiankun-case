import { BrowserRouter, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Link to={{ pathname: "/" }}>main-ract</Link>
          <Link to={{ pathname: "/app-react" }}>app-react</Link>
          <Link to={{ pathname: "/app-vue-hash" }}>app-vue-hash</Link>
          <div id="reactApp" />
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
