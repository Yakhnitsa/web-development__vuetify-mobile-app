<template>
    <v-container>
        <h1 class="headline">[[Top Stories]]</h1>
        Content is coming to this mobile app very soon!
        <news-list :newsArticles="newsArticles"></news-list>
    </v-container>
</template>

<script>
    import NewsList from '../components/NewsList.vue'
    import newsService from '../services/newsService'
    import ArticleType from '../types'
    export default {
        name: "TopStories.vue",
        components:{
            NewsList
        },
        data: function(){
            return{
                newsArticles: []
            }
        },
        mounted: function(){
            newsService.getArticlesByType(ArticleType.TopStory)
                .then(stories =>{
                    this.newsArticles = stories
                })
        }
    }
</script>

<style scoped>

</style>