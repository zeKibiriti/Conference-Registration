<template>
  <v-app-bar app height="180" color="#64B5F6">
<!--    <v-btn class="color-app" icon @click="goHome">-->
<!--      <v-icon>mdi-home</v-icon>-->
<!--    </v-btn>-->
    <v-toolbar-title class="color-app">Conference Portal</v-toolbar-title>

    <!-- Align buttons to the right -->
    <v-spacer></v-spacer>

    <!-- Two text buttons aligned on the right -->
<!--    <v-btn class="color-app" text @click="handleButtonClick1">Register</v-btn>-->
<!--    <router-link class="color-app" :to="formattedRoute('/home-page')">Home</router-link>-->
    <router-link class="color-app" :to="formattedRoute('/registration-page')">Register</router-link>
<!--    <router-link class="color-app" to="/home-page" >Home</router-link>-->
    <v-btn text @click="handleButtonClick2"></v-btn>
  </v-app-bar>
  <RouterView />
<!--  <router-view></router-view>-->
</template>

<script>
export default {
  methods: {
    name: "App",
    formattedRoute(route) {
      // Replace underscores with another character, e.g., '-'
      return route.replace(/_/g, '');
      // or remove underscores altogether
      // return route.replace(/_/g, '');
    }
  }
};

const goHome = () => {
  // Add logic to navigate home
  console.log("Go home action");
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
