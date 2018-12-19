module.exports = {
  siteMetadata: {
    title: 'College Shoutouts',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-firebase',
        short_name: 'starter',
        start_url: '/',
        background_color: '#ffb200',
        theme_color: '#663399',
        display: 'minimal-ui',
      },
    },
    'gatsby-plugin-layout'
    // 'gatsby-plugin-offline',
  ],
}
