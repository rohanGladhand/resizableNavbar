import './App.css';

import {HashRouter as Router, Switch, Route} from "react-router-dom"

import Home from './components/Home';
import Navbar from "./components/Navbar";
import AddDocument from "./components/AddDocument";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Home />
          </Route>
          {/* <Route exact path="/">
            <AddDocument />
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
