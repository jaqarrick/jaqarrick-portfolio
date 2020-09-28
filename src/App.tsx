import React from "react"
import "./App.css"
import Home from "./components/home/Home"
import Blog from "./components/blog/Blog"
import { Route, Switch, BrowserRouter as Router } from "react-router-dom"

const App = () => (
  <Router>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/posts' component={Blog} />
    </Switch>
  </Router>
)

export default App
