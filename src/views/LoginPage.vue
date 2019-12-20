<template>
    <v-container>
        <v-card width="400" class="mx-auto ml-5 mt-2">
            <v-card-title>
                <h1 class="display-1">Login</h1>
            </v-card-title>
            <v-card-text>
                <v-form>
                    <v-text-field
                            v-model="login"
                            label="Username"
                            prepend-icon="mdi-account"/>
                    <v-text-field
                            v-model="password"
                            label="Password"
                            :type="showPassword ? 'text' : 'password'"
                            prepend-icon="mdi-lock"
                            :append-icon="showPassword ? 'mdi-eye-outline' : 'mdi-eye-off'"
                            @click:append="showPassword = !showPassword"
                    />
                </v-form>
            </v-card-text>


            <v-card-actions>
                <v-btn color="success">Register</v-btn>
                <v-spacer></v-spacer>
                <v-btn color="info">Register</v-btn>
            </v-card-actions>
        </v-card>
    </v-container>

</template>

<script>
    export default {
        name: "LoginPage.vue",
        data: function(){
            return{
                showPassword: false,
                login:'',
                password:''
            }
        }
    }
</script>

<style scoped>

</style>