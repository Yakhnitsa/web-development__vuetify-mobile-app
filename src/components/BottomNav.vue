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

<script>
    export default {
        name: 'BottomNavbar',
        data: function(){
            return{
                activeItem: 'top',
            }
        }
    }
</script>