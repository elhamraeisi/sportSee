import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Error from './pages/Error';


ReactDOM.createRoot(document.getElementById("root")).render(


  <Router>
    <Header />
    <Sidebar />
    <Switch>
      <Route exact path="/user/:userId" >
        <Home />
      </Route>

      <Route>
        {/* Page 404 */}
        <Error />
      </Route>
    </Switch>
  </Router>

);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
