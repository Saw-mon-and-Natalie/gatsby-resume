module.exports = {
  plugins: [
    {  
        resolve: `gatsby-transformer-json`,
        options: {}
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`
      }
    },
  ]
}
