require("dotenv").config()

module.exports = {
  templates: {
    // Add templates for content types here.
    // Read more: https://gridsome.org/docs/templates/
  },
  plugins: [
    {
      use: "@ilrock/gridsome-source-prismic",
      options: {
        prismic_url: process.env.PRISMIC_API_URL,
        prismic_token: process.env.PRISMIC_TOKEN,
        collection_prefix: "Prismic"
      }
    }
  ]
}
