import "./App.css";
import Header from "./components/header";
import Form from "./components/form";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/Gallery">
          <h1>Phase-2 Group Project</h1>
          <h3>Cahen, Dominick, Dustin</h3>
        </Route>

        <Route exact path="/Game">
          <Form />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
