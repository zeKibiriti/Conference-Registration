<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card>
          <v-card-title class="text-h6">Login</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="login">
              <v-text-field
                v-model="username"
                label="Username"
                outlined
                required
              ></v-text-field>
              <v-text-field
                v-model="password"
                label="Password"
                outlined
                type="password"
                required
              ></v-text-field>
              <v-btn color="primary" text @click="handleButtonClick1" style="margin-right: 50px"
              >Register
              </v-btn>
              <v-btn type="submit" color="primary">Login</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async login() {
      // Perform authentication logic here
      if (this.username === "user" && this.password === "password") {
        // Simulate a successful login, redirect or set a token, etc.
        alert("Login successful!");
      } else {
        alert("Invalid credentials. Please try again.");
      }
    },
    handleButtonClick1() {
      this.$router.push({ path: "/registration-page" });

      // this.registrationDialog = true;
      // Handle the first button click
    },
  },
};
</script>
