<template>
  <v-app>
    <!-- Navigation Drawer -->
<!--    <v-navigation-drawer app>-->
<!--      &lt;!&ndash; Drawer content goes here &ndash;&gt;-->
<!--    </v-navigation-drawer>-->

    <!-- App Bar -->
    <v-app-bar app style="height: 15%">
<!--      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>-->
      <v-toolbar-title class="align-center">My App</v-toolbar-title>
      <div class="navLink col-3 d-flex" style="margin-top: 75px;">
        <router-link class="link" to="/home-page" >Home</router-link>
        <router-link class="link" to="/registration-page" style="color: red;">Conference Registration</router-link>
        <router-link class="link" to="/navigation-page" style="color: red;">Navigation</router-link>
      </div>
    </v-app-bar>

    <!-- Main Content -->
    <v-main style="margin-top: 45px">
      <HelloWorld></HelloWorld>
      <!-- Your main content goes here -->
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "@/components/HelloWorld";
export default {
  components: {HelloWorld},
  data() {
    return {
      drawer: false, // Controls whether the drawer is open or closed
    };
  },
};
</script>
<style scoped>
.d-flex {
  display: flex;
}

.justify-center {
  justify-content: center;
}

.align-center {
  align-items: center;
}
</style>
