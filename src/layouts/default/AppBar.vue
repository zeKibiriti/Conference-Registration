<template>
  <div id="app">
    <div class="navLink col-3">
      <router-link class="link" to="/home-page">Home</router-link>
      <router-link class="link" to="/registration-page" style="color: red">Conference Registration</router-link>
<!--      <router-link class="link" to="/about">About</router-link>-->
<!--      <router-link class="link" to="/movies">Movies</router-link>-->
<!--      <router-link class="link" to="/actors">Actors</router-link>-->
<!--      <router-link class="link" to="/profile">Profile</router-link>-->
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
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
</style>





<!--<template>-->
<!--  <div id="app">-->
<!--    <div class="navLink col-3">-->
<!--  <v-app-bar-->
<!--    height="100"-->
<!--    color="gray"-->
<!--    icon="mdi-information"-->
<!--    :border="false"-->
<!--    :outlined="false"-->
<!--    dense-->
<!--  >-->

<!--&lt;!&ndash;    <v-img&ndash;&gt;-->
<!--&lt;!&ndash;      src="../../../hssrcbanner.jpg"&ndash;&gt;-->
<!--&lt;!&ndash;      absolute&ndash;&gt;-->
<!--&lt;!&ndash;      top="0"&ndash;&gt;-->
<!--&lt;!&ndash;      left="0"&ndash;&gt;-->
<!--&lt;!&ndash;      right="0"&ndash;&gt;-->
<!--&lt;!&ndash;      bottom="0"&ndash;&gt;-->
<!--&lt;!&ndash;      style="width: 200%; height: 100%;"&ndash;&gt;-->
<!--&lt;!&ndash;    ></v-img>&ndash;&gt;-->

<!--    <router-link to="/registration-page" style="color: red">Conference Registration</router-link>-->
<!--    <div class="flex-grow-1" style="z-index: -1;"></div>-->
<!--  </v-app-bar>-->
<!--    </div>-->
<!--&lt;!&ndash;    <router-view></router-view>&ndash;&gt;-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->

<!--import RegistForm from "@/components/RegistForm";-->

<!--export default {-->
<!--  components: {-->
<!--    RegistForm,-->
<!--  },-->
<!--  methods: {-->
<!--    openDialog() {-->
<!--      // Set the 'dialog' data property in DialogComponent to true-->
<!--      this.$refs.RegistForm.dialog = true;-->
<!--    },-->
<!--  },-->
<!--};-->
<!--</script>-->

<!--<style>-->
<!--/* Additional styles as needed */-->
<!--</style>-->



