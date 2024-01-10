<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card class="elevation-12">
          <v-card-title class="primary darken-1 white--text text-center">
            <h2>Login</h2>
          </v-card-title>

          <v-card-text>
            <v-form @submit.prevent="login">
              <v-text-field
                v-model="username"
                label="Username"
                outlined
                dense
                required
              ></v-text-field>

              <v-text-field
                v-model="password"
                label="Password"
                type="password"
                outlined
                dense
                required
              ></v-text-field>

              <v-btn
                type="submit"
                color="primary"
                class="white--text"
                block
                @click="login"
              >
                Login
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async login() {
      const response = await axios.post("http://localhost:3200/api/v1/login", {
        // Add your login logic here
        username: this.username,
        password: this.password
        // console.log("Username:", this.username);
        // console.log("Password:", this.password);
        // You can replace the console.log statements with your actual login logic
      });
      console.log("response:", response);
    },
  },
};
</script>

<style scoped>
/* Add your custom styles here */
</style>
