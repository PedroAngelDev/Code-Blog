const { slugify } = require('./src/utils/slugify')
const path = require('path')
const _ = require('lodash')

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'MarkdownRemark') {
    const slugFromTitle = slugify(node.frontmatter.title)
    createNodeField({
      node,
      name: 'slug',
      value: slugFromTitle,
    })
  }
}

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const singlePostTemplate = path.resolve('src/templates/SinglePost.jsx')
  const tagsPageTemplate = path.resolve('src/templates/TagsPage.jsx')
  const tagPostsTemplate = path.resolve('src/templates/TagPosts.jsx')
  const postsListTemplate = path.resolve('src/templates/PostsList.jsx')

  const res = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              author
              tags
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  if (res.errors) return Promise.reject(res.errors)
  const posts = res.data.allMarkdownRemark.edges
  posts.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: singlePostTemplate,
      context: {
        // Pasando el slug para el template
        slug: node.fields.slug,
      },
    })
  })

  let tags = []
  _.each(posts, (edge) => {
    if (_.get(edge, 'node.frontmatter.tags')) {
      tags = tags.concat(edge.node.frontmatter.tags)
    }
  })

  let tagsPostCounts = {}
  tags.forEach((tag) => {
    tagsPostCounts[tag] = (tagsPostCounts[tag] || 0) + 1
  })

  tags = _.uniq(tags)

  createPage({
    path: `/tags`,
    component: tagsPageTemplate,
    context: {
      tags,
      tagsPostCounts,
    },
  })

  tags.forEach((tag) => {
    createPage({
      path: `/tag/${slugify(tag)}`,
      component: tagPostsTemplate,
      context: {
        tag,
      },
    })
  })

  const postPerPage = 3
  const numberOfPages = Math.ceil(posts.length / postPerPage)

  Array.from({ length: numberOfPages }).forEach((_, index) => {
    const isFirstPage = index === 0
    const currentPage = index + 1

    if (isFirstPage) return

    createPage({
      path: `/page/${currentPage}`,
      component: postsListTemplate,
      context: {
        limit: postPerPage,
        skip: index * postPerPage,
        numberOfPages,
        currentPage,
      },
    })
  })
}
