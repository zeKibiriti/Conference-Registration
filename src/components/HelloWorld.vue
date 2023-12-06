<template>
  <v-container class="fill-height">
<!--    Sliders Starts here-->
    <v-carousel>
      <v-carousel-item
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        cover
      ></v-carousel-item>

      <v-carousel-item
        src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
        cover
      ></v-carousel-item>

      <v-carousel-item
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        cover
      ></v-carousel-item>
    </v-carousel>
<!--    Sliders Ends here-->
        <v-footer dark class="bg-teal d-flex flex-column" :style="{ height: '20%' }">
          <v-container>
            <!-- Footer content goes here -->
            <v-row>
              <v-col>
                <v-row>
                  <v-col>
                    <v-icon>mdi-heart</v-icon>
                    Made with love
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-container>
        </v-footer>
    <!--    Footer Ends here-->
  </v-container>
</template>

<script setup>
  //
</script>
