<!-- src/components/HorizontalImageCards.vue -->

<template>
  <span class="pt-5 pb-12 color-title"><h1>Sponsors</h1></span>

  <v-row>
    <v-col
      v-for="image in images"
      :key="image.id"
      cols="12"
      sm="6"
      md="4"
      lg="3"
    >
      <v-card class="image-card" elevation="2">
        <v-img :src="image.src" alt="Image" aspect-ratio="2.5"></v-img>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      images: [
        { id: 1, src: "https://cdn.vuetifyjs.com/images/cards/hotel.jpg" },
        { id: 2, src: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" },
        { id: 3, src: "https://cdn.vuetifyjs.com/images/cards/docks.jpg" },
        { id: 4, src: "https://cdn.vuetifyjs.com/images/cards/hotel.jpg" },
        // Add more images as needed
      ],
    };
  },
};
</script>

<style scoped>
.image-card {
  margin: 8px;
}

.color-title {
  color: grey;
}
</style>
