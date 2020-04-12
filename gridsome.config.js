require("dotenv").config()

module.exports = {
  templates: {
    PrismicPost: "/posts/:slug"
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
};
