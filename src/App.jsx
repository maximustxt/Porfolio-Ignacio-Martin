import { Route, Router } from "wouter";
import "./app.css";
import Home from "./components/Home";
import { ThemeContext } from "./Context/Themes";

function App() {
  return (
    <ThemeContext>
      <Router>
        <Route path="/" component={Home} />
      </Router>
    </ThemeContext>
  );
}

export default App;
