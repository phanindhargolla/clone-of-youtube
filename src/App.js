import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RecommendationVideo from "./RecommendationVideo";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from './SearchPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/search/:searchpage">
            <div className="app__page">
              <Sidebar />
              <SearchPage />
            </div>  
          </Route>
          <Route path="/">
            <div className="app__page">
              <Sidebar />
              <RecommendationVideo />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
