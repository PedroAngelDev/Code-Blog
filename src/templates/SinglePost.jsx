import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts/layout'
import SEO from '../components/Seo'
import Img from 'gatsby-image'
import Tags from '../components/Tags'
import { FaFacebook, FaReddit, FaTwitter } from 'react-icons/fa'

const SinglePost = ({ data, pageContext }) => {
  const post = data.markdownRemark.frontmatter
  const baseUrl = 'https://code-blog.pages.dev/'

  return (
    <Layout>
      <SEO
        title={post.title}
        description={data.markdownRemark.excerpt}
        keywords={post.tags.join(',')}
        imageCard={baseUrl + post.image.childImageSharp.fluid.src}
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
                'https://reddit.com/submit?url=' +
                baseUrl +
                pageContext.slug +
                '&title=' +
                post.title
              }
              className="reddit m-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaReddit size="2rem" color="#FF4500" />
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
      excerpt
    }
  }
`

export default SinglePost
