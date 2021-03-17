import React from 'react'
import SEO from '../components/Seo'
import Post from '../components/Post'
import Layout from '../layouts/layout'
import { graphql, StaticQuery } from 'gatsby'
import PaginationLinks from '../components/PaginationLinks'
import { Col, Row } from 'reactstrap'

const IndexPage = () => {
  const postsPerPage = 3
  let numberOfPages
  return (
    <Layout>
      <SEO
        title="Inicio"
        description="Blog de código"
        keywords="blog, programación, frontend, tecnología"
        imageCard="https://code-blog.pages.dev/static/a5e1a3d327887810f79f243cd4886616/9a128/post1-blog.jpg"
      />
      <StaticQuery
        query={indexQuery}
        render={(data) => {
          numberOfPages = Math.ceil(
            data.allMarkdownRemark.totalCount / postsPerPage
          )
          return (
            <>
              <PaginationLinks currentPage={1} numberOfPages={numberOfPages} />
              <Row>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                  <Col md="6" lg="4" key={node.id} className="my-3">
                    <Post
                      body={node.excerpt}
                      slug={node.fields.slug}
                      date={node.frontmatter.date}
                      tags={node.frontmatter.tags}
                      title={node.frontmatter.title}
                      author={node.frontmatter.author}
                      image={
                        node.frontmatter.image.childImageSharp.gatsbyImageData
                      }
                    />
                  </Col>
                ))}
              </Row>
            </>
          )
        }}
      />
    </Layout>
  )
}

const indexQuery = graphql`
  {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
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

export default IndexPage
