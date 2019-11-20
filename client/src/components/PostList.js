import React from "react"
import { usePosts } from "../hooks"
import { Link } from "react-router-dom"
export default props => {
  const posts = usePosts(props.match.params.slug)
  console.log(posts)
  return (
    <div>
      <h1>Posts</h1>
      <Link to={"/" + props.match.params.slug + "/post"}>Add Post</Link>
      {posts.map(post => (
        <p key={"post" + post.id}>
          <Link to={"/post/" + post.id}>{post.name}</Link>
        </p>
      ))}
    </div>
  )
}
