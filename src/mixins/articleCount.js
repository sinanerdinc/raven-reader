export default {
  methods: {
    getArticlesCount (type, feedid) {
      if (type === '' && feedid !== '') {
        return this.$store.state.Article.articles.filter(article => article.articles.feed_uuid === feedid).length
      }
      if (type === 'category') {
        return this.$store.state.Article.articles.filter(article => article.articles.category === feedid).length
      }
    }
  }
}
