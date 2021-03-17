module.exports = {
  siteMetadata: {
    title: `Code Blog`,
    author: `PedroAngelVD`,
    description: `Un simple blog de código`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Code Blog`,
        short_name: `code-blog`,
        start_url: `/`,
        background_color: `#343A40`,
        theme_color: `#343A40`,
        display: `standalone`,
        icon: `src/images/logo.png`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-react-helmet`,
  ],
}
