<template>
  <v-app-bar app height="180" color="#64B5F6">
    <v-btn class="color-app" icon @click="goHome">
      <v-icon>mdi-home</v-icon>
    </v-btn>
    <v-toolbar-title class="color-app">Conference Portal</v-toolbar-title>

    <!-- Align buttons to the right -->
    <v-spacer></v-spacer>

    <!-- Two text buttons aligned on the right -->
    <v-btn class="color-app" text @click="handleButtonClick1">Register</v-btn>
    <v-btn text @click="handleButtonClick2"></v-btn>
  </v-app-bar>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
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
