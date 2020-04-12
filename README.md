# Prismic Starter for Gridsome

## Guide

Add your prismic api url and your access token to the `.env` file. For simplicity, you can rename the `.env_example` file to `.env` and simply replace the values

```js
// gridsome.config.js
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
```

Once you import your Prismic documents, be sure to add them as templates when needed as documented [here](https://github.com/ilrock/gridsome-source-prismic)
