<template>
  <v-app-bar app height="120" color="#64B5F6">
    <h2 class="color-app pl-5">Conference Portal</h2>

    <!-- Align buttons to the right -->
    <v-spacer></v-spacer>
    <v-btn class="color-app" icon @click="goHome">
      <v-icon style="font-size: 24px">mdi-home</v-icon>
    </v-btn>
    <v-btn class="color-app" text @click="handleButtonClick2"
      ><h3>About</h3></v-btn
    >
    <v-btn class="color-app" text @click="handleButtonClick1"
      ><h3>Register</h3></v-btn
    >
    <v-btn class="color-app" text @click="handleButtonClick3"
      ><h3>Login</h3></v-btn
    >
  </v-app-bar>

  <!-- The registration dialog -->
  <v-dialog v-model="registrationDialog" max-width="600">
    <v-card>
      <!-- Your registration form or content goes here -->
      <v-card-title>Registration Form</v-card-title>
      <v-card-text>
        <!-- Your registration form fields go here -->
      </v-card-text>
      <v-card-actions>
        <v-btn @click="registrationDialog = false">Close</v-btn>
        <!-- Additional actions if needed -->
      </v-card-actions>
    </v-card>
  </v-dialog>
  <v-container class="mt-12"> </v-container>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      registrationDialog: false, // Initialize registrationDialog to false
    };
  },
  methods: {
    goHome() {
      // Use the Vue Router to navigate to the home route
      this.$router.push({ path: "/" });
    },
    handleButtonClick1() {
      this.$router.push({ path: "/registration-page" });

      // this.registrationDialog = true;
      // Handle the first button click
    },
    handleButtonClick2() {
      this.$router.push({ path: "/about-page" });
    },
    handleButtonClick3() {
      this.$router.push({ path: "/login-page" });
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.link {
  margin: 10px;
}
.link.active {
  background-color: red;
  color: white;
}
.color-app {
  color: white;
}
</style>
