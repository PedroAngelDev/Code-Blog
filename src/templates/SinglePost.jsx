import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts/layout'
import SEO from '../components/Seo'
import Img from 'gatsby-image'
import Tags from '../components/Tags'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'

const SinglePost = ({ data, pageContext }) => {
  const post = data.markdownRemark.frontmatter
  const baseUrl = 'https://gatsbytutorial.com.pe/'

  return (
    <Layout>
      <SEO
        title={post.title}
        description="Post de Code Blog"
        keywords={post.tags.join(',')}
      />
      <div className="d-flex justify-content-center">
        <div className="col-md-8">
          <h1 className="text-center mb-4">{post.title}</h1>
          <Img fluid={post.image.childImageSharp.fluid} alt={post.title} />
          <div className="text-center m-2">
            <p className="h6 text-muted m-0"> {post.author}</p>
            <small className="text-muted">{post.date}</small>
          </div>

          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
          <Tags tags={post.tags} />
          <p className="text-center h4 mt-3">Comparte este post</p>
          <div className="d-flex justify-content-center">
            <a
              href={
                'https://www.linkedin.com/sharing/share-offsite/?url=' +
                baseUrl +
                pageContext.slug
              }
              className="linkedin m-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size="2rem" color="#0077B0" />
            </a>

            <a
              href={
                'https://www.twitter.com/share?url=' +
                baseUrl +
                pageContext.slug +
                '&text=' +
                post.title +
                '&via' +
                'twitterHandle'
              }
              className="twitter m-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size="2rem" color="#2CA5DA" />
            </a>
            <a
              href={
                'https://www.facebook.com/sharer/sharer.php?u=' +
                baseUrl +
                pageContext.slug
              }
              className="facebook m-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size="2rem" color="#077AE9" />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const postQuery = graphql`
  query blogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        author
        date(formatString: "D [de] MMMM [del] YYYY", locale: "es-pe")
        tags
        image {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default SinglePost
