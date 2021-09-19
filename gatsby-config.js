/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const siteMetadata = {
  title: "Alex TV",
  titleTemplate: "Alex TV · %s ",
  description: "Alex Tv - La TV italiano che rivogliamo indietro!!",
  siteUrl: "https://alextv.netlify.app", // No trailing slash allowed!
  image: "/ALEXtv.png", // Path to your image you placed in the 'static' folder
  twitterUsername: "@PaoroCatarano",
  siteLanguage: `it`,
  siteLocale: `it`,
  authorName: `Paolo Catalano`,
  favicon: `./static/favicon.png`,
}

module.exports = {
  siteMetadata: siteMetadata,
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Alex TV`,
        short_name: `AlexTV`,
        start_url: `/`,
        theme_color: `#051d40`,
        background_color: `#ffde59`,
        display: `standalone`,
        icons: [
          {
            src: "/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
        cache_busting_mode: "none",
      },
    },
  ],
}
