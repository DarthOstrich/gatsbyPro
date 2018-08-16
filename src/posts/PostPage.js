import React, { Component } from 'react'

export default class PostPage extends Component {
  render() {
    const { data } = this.props
    return (
      <div>
        <h4>{data.markdownRemark.frontmatter.date}</h4>
        <h1>{data.markdownRemark.frontmatter.title}</h1>

        <div
          dangerouslySetInnerHTML={{
            __html: data.markdownRemark.html,
          }}
        />
      </div>
    )
  }
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM DD YYYY")
      }
    }
  }
`
