import React from 'react'
import Img from 'gatsby-image'
import PostListing from '../components/Posts/PostListing'

const IndexPage = ({ data }) => (
  <div>
    <h2>Posts</h2>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <PostListing key={node.id} post={node} />
    ))}
  </div>
)

export default IndexPage

export const query = graphql`
  query indexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          html
          excerpt(pruneLength: 280)
          frontmatter {
            title
            date(formatString: "MMMM DD YY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
