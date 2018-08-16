import React from 'react'
import Link from 'gatsby-link'

const PostListing = ({ post }) => (
  <article>
    <h3>
      <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
    </h3>
    <h3>{post.frontmatter.date}</h3>
    <p>{post.excerpt}</p>
  </article>
)

export default PostListing
