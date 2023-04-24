import "./App.css";
import Header from "./components/header";
import Form from "./components/form";
import { Switch, Route } from "react-router-dom";
import CardContainer from "./components/card_container";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <h1>Phase-2 Group Project</h1>
          <h3>Cahen, Dominick, Dustin</h3>
        </Route>
        <Route path="/Gallery">
          <CardContainer className="card_container" />
        </Route>

        <Route exact path="/Game">
          <Form />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
