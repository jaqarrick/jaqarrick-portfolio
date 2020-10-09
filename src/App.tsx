import React from "react"
import "./App.css"
import Home from "./components/home/Home"
import Blog from "./components/blog/Blog"
import { Route, Switch, BrowserRouter as Router } from "react-router-dom"

const App = () => (
  <Router basename={process.env.PUBLIC_URL + "/"}>
    <Switch>
      <Route path='/posts' exact component={Blog} />
      <Route path='/' exact component={Home} />
    </Switch>
  </Router>
)

export default App
