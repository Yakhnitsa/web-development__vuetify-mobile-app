
<template>
  <v-app>

    <TopToolbar></TopToolbar>

    <BottomNav></BottomNav>

  </v-app>
</template>

<script>
    import TopToolbar from './components/TopToolbar.vue';
    import BottomNav from './components/BottomNav.vue';

    export default {
        components: {
            TopToolbar,
            BottomNav
        }
    }
</script>