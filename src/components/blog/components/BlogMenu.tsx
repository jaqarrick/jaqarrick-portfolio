import React, { useState } from "react"
import { BlogComponent } from "../../../types"
import { Link } from "react-router-dom"

interface Props {
  allPosts: BlogComponent[]
}

const BlogMenu: React.FC<Props> = ({ allPosts }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  return (
    <>
      <div
        className='menu-header'
        onClick={() => {
          if (isMenuOpen) setIsMenuOpen(false)
          else setIsMenuOpen(true)
        }}>
        <div className='mobile-header-logo'> Posts </div>
        <div
          className={isMenuOpen ? "arrow-container active" : "arrow-container"}>
          <img alt='arrow-logo' src='/assets/logos/Arrow-Logo.png' />
        </div>
      </div>
      <div className={isMenuOpen ? "list-container active" : "list-container"}>
        <ul>
          {allPosts.map(item => {
            return (
              <li key={item.id} onClick={() => setIsMenuOpen(false)}>
                <Link to={`/posts/${item.id}`}>
                  {item.title.toUpperCase()}
                  <br></br>
                  {item.date}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default BlogMenu
