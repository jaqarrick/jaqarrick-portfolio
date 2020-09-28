import React from "react"
import blogData from "./data/blogData.json"
import BlogPost from "./components/BlogPost"
import BlogMenu from "./components/BlogMenu"
import { Route, Switch, RouteComponentProps } from "react-router-dom"

import "./Blog.css"

interface Props extends RouteComponentProps {}
const Blog: React.FC<Props> = ({ match, location, history }) => {
  return (
    <div className='blog wrapper'>
      <div className='blog menu-container'>
        <BlogMenu allPosts={blogData} />
      </div>
      <div className='content-container'>
        <Switch>
          <Route path='/posts/:id' exact component={BlogPost} />
        </Switch>
      </div>
    </div>
  )
}

export default Blog
