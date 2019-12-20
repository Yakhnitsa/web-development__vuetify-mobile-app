<template>
    <div>
        <v-navigation-drawer fixed v-model="showMenu">
            <v-list dense>
                <v-list-item :to="{path: '/login'}">
                    <v-list-item-action>
                        <v-icon>mdi-account-multiple</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Login</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item @click="">
                    <v-list-item-action>
                        <v-icon>mdi-wrench</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Settings</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item @click="">
                    <v-list-item-action>
                        <v-icon>mdi-help-rhombus-outline</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Help</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>


        <v-toolbar fixed dark color="primary">

            <v-app-bar-nav-icon @click.stop="toggleMenu()"></v-app-bar-nav-icon>

            <v-toolbar-title class="white--text">Vue News</v-toolbar-title>

        </v-toolbar>

    </div>
</template>

<script>
    export default {
        name: 'TopToolbar',
        data: function(){
            return{
                showMenu: false,
            }
        },
        methods:{
            toggleMenu: function() {
                this.showMenu = !this.showMenu
            }
        }


    }
</script>