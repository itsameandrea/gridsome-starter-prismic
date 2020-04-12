<template>
  <layout>
    <h1> {{ post.data.title }}</h1>
    <img :src="post.data.image.url" />
    <div v-html="post.data.content"></div>
  </layout>
</template>
<script>
export default {
  computed: {
    post() {
      return this.$page.post
    }
  }
}
</script>
<style scoped>
  img {
    width: 100%
  }
</style>
<page-query>
  query PrismicPost ($id: ID!) {
    post: prismicPost (id: $id) {
      data {
        title
        image {
          url
        }
        content
      }
    }
  }
</page-query>

