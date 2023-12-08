<template>
  <v-app>
    <default-bar />

    <!-- Add margin and spacing to create space between components -->
    <v-container class="mt-5">
      <Slider class="mb-5" />
      <Sponser class="mb-5" />
      <default-view />
    </v-container>
  </v-app>
</template>

<script setup>
import DefaultBar from "./AppBar.vue";
import Slider from "../../components/Slider.vue";
import Sponser from "../../components/Sponser.vue";
</script>
