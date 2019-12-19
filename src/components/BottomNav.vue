<template>

    <v-bottom-navigation v-model="activeItem">
        <v-btn flat color="primary" value="top">
            <span>Top Stories</span>
            <v-icon>mdi-thumb-up-outline</v-icon>
        </v-btn>

        <v-btn color="primary" value="code">
            <span>Code Examples</span>
            <v-icon>mdi-code-tags</v-icon>
        </v-btn>

        <v-btn flat color="primary" value="favorites">
            <span>Favorites</span>
            <v-icon>mdi-heart-outline</v-icon>
        </v-btn>

    </v-bottom-navigation>

</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    @Component
    export default class BottomNav extends Vue {
        activeItem: string = 'top';
        activeBtn: 1
    }
</script>