import React, { useEffect, useState } from "react"
import { RouteChildrenProps } from "react-router-dom"
import { BlogComponent } from "../../../types"
import blogData from "../data/blogData.json"

// interface Props {
//   currentPost: BlogComponent,
// }
interface Props extends RouteChildrenProps<{ id: string }> {}
const BlogPost: React.FC<Props> = ({ match }) => {
  const [currentPost, setCurrentPost] = useState<BlogComponent>(blogData[0])
  useEffect(() => {
    if (match?.params.id) {
      const currentIndex: number = parseInt(match?.params.id)
      setCurrentPost(blogData[currentIndex])
    }
  }, [match])

  return (
    <div className='slide'>
      <div className='text-node'>
        <h1 dangerouslySetInnerHTML={{ __html: currentPost.title }} />
        <h2 dangerouslySetInnerHTML={{ __html: currentPost.date }} />
        <div dangerouslySetInnerHTML={{ __html: currentPost.htmlText }} />
      </div>
    </div>
  )
}

export default BlogPost
