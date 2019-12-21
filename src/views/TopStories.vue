<template>
    <v-container>
        <h1 class="headline">[[Top Stories]]</h1>
        Content is coming to this mobile app very soon!
        <news-list></news-list>
    </v-container>
</template>

<script>
    import NewsList from '../components/NewsList.vue'
    export default {
        name: "TopStories.vue",
        components:{
            NewsList
        }
    }
</script>

<style scoped>

</style>