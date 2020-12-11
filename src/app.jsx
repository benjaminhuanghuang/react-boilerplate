import React from 'react';
import {BrowserRouter as Router, Switch, Route}  from 'react-router-dom'
import {hot} from 'react-hot-loader'

import './App.scss'
import Header from "./components/Header";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Reports from "./pages/Reports";
import {TodoList} from "./pages/todos";


function App() {
   return (
     <Router>
       <Header />
       <Switch>
         <Route path="/" exact component={Home} />
         <Route path="/reports" component={Reports} />
         <Route path="/products" component={Products} />
         <Route path="/todos" component={TodoList} />
       </Switch>
     </Router>
   );
 }

export default hot(module)(App);