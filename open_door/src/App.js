import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import Home from "./Components/Search/Home";
import Building from "./Components/Search/Building/Building";
import Add from './Components/Search/Building/add';

class App extends Component {
 render() {
   return (
     <div className="app">
       <div>
         <Switch>
           <Route exact path = "/" component={Home}/>
           <Route exact path={"/building/:id"} component={Building} />
           <Route path="/add" component={Add}/>
         </Switch>
       </div>
     </div>
   );
 }
}

export default App;
