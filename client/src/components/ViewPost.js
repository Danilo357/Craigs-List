import React from "react"
import { usePost } from "../hooks"
export default props => {
  const post = usePost(props.match.params.id)
  return (
    <section className="viewPage">
      <h1>Title:{post.name}</h1>
      <p>Content:{post.post}</p>
    </section>
  )
}
