/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [{
  resolve: "@plasmicapp/loader-gatsby",
  options: {
    projects: [
      {
        id: "pegtNamGZG861M6GRApRZ4",
        token: "Fe8mp2kFotfOIT51VnOz80FLigZw88QXatZKbfRbh0DP6xXy7udOk9xLjmxQWnQpy46XEi4tB54PUCNEFiBIVA",
      },
    ], // An array of project ids.
    preview: false,
    defaultPlasmicPage: require.resolve("./src/templates/defaultPlasmicPage.jsx"),
  },
},
{
  resolve: "gatsby-plugin-react-helmet",
}
]
}
