import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Search/Home";
import Building from "./Components/Search/Building/Building";

class App extends Component {
 render() {
   return (
     <div className="App">
       <div>
         <Switch>
           <Route exact path = "/" component={Home}/>
           <Route exact path={"/building/:id"} component={Building} />
         </Switch>
       </div>
     </div>
   );
 }
}

export default App;

