import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts/layout'
import TitlePage from '../components/TitlePage'
import Post from '../components/Post'
import { Col, Row } from 'reactstrap'

const TagPosts = ({ data, pageContext }) => {
  const { tag } = pageContext
  const { totalCount } = data.allMarkdownRemark
  const pageHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } etiquetado${totalCount === 1 ? '' : 's'} con "${tag}"`

  return (
    <Layout>
      <TitlePage title={pageHeader} />
      <Row>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Col md="6" lg="4" key={node.id} className="my-3">
            <Post
              key={node.id}
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

export const tagQuery = graphql`
  query($tag: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
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

export default TagPosts
