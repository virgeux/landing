import PageNotFound from "./pages/404";
import React from "react";
import Home from "./pages/home";
import { Route, Switch } from "react-router-dom";

function App() {
 localStorage.setItem("color","color-1");
  return (
    <div className="App">   
      <Switch
      >
        <Route exact path={`/`} component={Home} />
        <Route component={PageNotFound} />
      </Switch>
      
    </div>
  );
}

export default App;
