import "./App.css";
import Header from "./components/header";
import Form from "./components/form";
import { Switch, Route } from "react-router-dom";
import CardContainer from "./components/card_container";
import { useState, useEffect } from "react";
import Favorites from "./components/favorites";
let apiKey = process.env.REACT_APP_Token;

function App() {
  console.log(apiKey);
  const [parks, setParks] = useState([]);
  const [myParks, setMyParks] = useState([]);

  useEffect(() => {
    fetch(`https://developer.nps.gov/api/v1/parks?park&api_key=${apiKey}`)
      .then((res) => res.json())
      .then((data) => setParks(data.data));
  }, []);

  function handleClick(park) {
    console.log("clicked");

    if (!myParks.includes(park)) {
      setMyParks([...myParks, park]);
    } else {
      alert("It's already on your list");
    }
  }

  return (
    <div>
      <Header />

      <Switch>
        <Route exact path="/">
          <h1>Routes on Routes</h1>
          <h3>Cahen, Dominick, Dustin</h3>
        </Route>
        <Route path="/Gallery">
          <input
            className="search"
            type="text"
            placeholder="search by state..."
          ></input>
          <button className="search_btn"> Search </button>
          <CardContainer
            className="card_container"
            parks={parks}
            handleClick={handleClick}
          />
        </Route>
        <Route exact path="/Game">
          <Form />
        </Route>
        <Route path="/Favorites">
          <Favorites myParks={myParks} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

// curl -X GET "" -H "accept: application/json"
