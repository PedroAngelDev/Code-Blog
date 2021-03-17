import React from 'react'
import Layout from '../layouts/layout'
import Post from '../components/Post'
import { graphql } from 'gatsby'
import PaginationLinks from '../components/PaginationLinks'
import { Col, Row } from 'reactstrap'

const PostsList = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges
  const { currentPage, numberOfPages } = pageContext
  return (
    <Layout>
      <PaginationLinks
        currentPage={currentPage}
        numberOfPages={numberOfPages}
      />
      <Row>
        {posts.map(({ node }) => (
          <Col md="6" lg="4" key={node.id}>
            <Post
              slug={node.fields.slug}
              title={node.frontmatter.title}
              author={node.frontmatter.author}
              date={node.frontmatter.date}
              body={node.excerpt}
              tags={node.frontmatter.tags}
              image={node.frontmatter.image.childImageSharp.gatsbyImageData}
            />
          </Col>
        ))}
      </Row>
    </Layout>
  )
}

export const postsListQuery = graphql`
  query postsListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "D [de] MMMM [del] YYYY", locale: "es-pe")
            author
            tags
            image {
              childImageSharp {
                gatsbyImageData(width: 600, formats: AUTO)
              }
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default PostsList
