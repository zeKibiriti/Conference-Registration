<template>
  <v-container>
    <!-- Center-aligned v-row -->
    <v-card
      class="mx-auto"
      width="800"
      prepend-icon="mdi-home"
    >
      <template v-slot:title>
        Select Category you want to Register
      </template>
    <v-row class="text-center">
      <v-col>
        <!-- Horizontal line (hr) -->
        <hr>

        <v-card-text>
          <v-row style="margin-left: 48%"><h4>Categories</h4>
          </v-row>
        <!-- v-radio-group -->
<!--        <v-radio-group v-model="inline" inline @change="handleRadioChange">-->
          <!-- Radio buttons -->
          <v-col style="text-align: center">
            <v-radio-group
              @change="handleRadioChange"
              style="margin-left: 35%"
              v-model="inline"
              inline
            >
              <v-radio
                label="Individual"
                value="Individual"
              ></v-radio>
              <v-radio
                label="Booth"
                value="Booth"
              ></v-radio>
              <v-radio
                label="Forum"
                value="Forum"
              ></v-radio>
            </v-radio-group>
          </v-col>
<!--          <v-radio label="Option 1" value="option1"></v-radio>-->
<!--          <v-radio label="Option 2" value="option2"></v-radio>-->
<!--        </v-radio-group>-->
        </v-card-text>
      </v-col>
    </v-row>

    <!-- Your dialog -->
<!--    <v-dialog v-model="dialog">-->
      <v-dialog v-model="dialogs.Individual" max-width="800px">
        <v-card>
          <h3 style="text-align: center; margin-top: 20px">Conference Registration Form</h3>
          <!-- Form Content -->
          <v-form v-model="valid" @submit.prevent="submitForm">
            <v-container fluid fill-height>
              <!-- Select Category -->
              <v-row align="center" justify="center">
                <v-col cols="12" md="6">
                  <v-select
                    v-model="selectedItem"
                    :items="['Student', 'Non Student']"
                    label="Select Category"
                  >
                    <template #append-outer>
                      <v-icon @click="clearSelection">mdi-close-circle</v-icon>
                    </template>
                  </v-select>
                </v-col>

                <v-col cols="12" md="6">
                  <v-select
                    v-model="selectedItem"
                    :items="['Tanzania', 'Kenya', 'Uganda']"
                    label="Select Country"
                  >
                    <template #append-outer>
                      <v-icon @click="clearSelection">mdi-close-circle</v-icon>
                    </template>
                  </v-select>
                </v-col>
              </v-row>
              <v-row>
                <h4>Gender</h4>
                <hr>
                <v-radio-group
                  v-model="inline"
                  inline
                >
                  <v-radio
                    label="Male"
                    value="Male"
                  ></v-radio>
                  <v-radio
                    label="Female"
                    value="Female"
                  ></v-radio>
                </v-radio-group>
              </v-row>

              <!-- Name Fields -->
              <v-row align="center" justify="center">
                <v-col cols="12" md="4">
                  <v-text-field
                    v-model="firstname"
                    :rules="nameRules"
                    :counter="10"
                    label="First name"
                    required
                    hide-details
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field
                    v-model="middlename"
                    :rules="nameRules"
                    :counter="10"
                    label="Middle name"
                    required
                    hide-details
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field
                    v-model="lastname"
                    :rules="nameRules"
                    :counter="10"
                    label="Last name"
                    hide-details
                    required
                  ></v-text-field>
                </v-col>
              </v-row>

              <!-- Email and Phone Number Fields -->
              <v-row align="center" justify="center">
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    hide-details
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="phoneNumber"
                    :rules="phoneRules"
                    label="Phone Number"
                    @input="formatPhoneNumber"
                    hide-details
                    required
                  ></v-text-field>
                </v-col>
              </v-row>

              <!-- Description Field -->
              <v-row align="center" justify="center">
                <v-col cols="12" md="12">
                  <v-textarea
                    v-model="description"
                    :counter="300"
                    label="Description"
                    placeholder="Enter your description here..."
                  ></v-textarea>
                </v-col>
              </v-row>

              <!-- Buttons -->
              <v-row class="mt-4">
                <!-- Cancel Button -->
                <v-col>
                  <v-btn @click="cancelForm">Cancel</v-btn>
                </v-col>
                <!-- Reset Button -->
                <v-col>
                  <v-btn @click="resetForm" color="error">Reset</v-btn>
                </v-col>
                <!-- Submit Button -->
                <v-col>
                  <v-btn type="submit" color="primary">Submit</v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card>
      </v-dialog>
      <!-- Dialog content goes here -->
<!--    </v-dialog>-->
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      inline: null,
      Individual: null,
      Booth: null,
      Forum: null,
      dialogs: {
        Individual: false,
        Booth: false,
        Forum: false,
      }
    };
  },
  methods: {
  //   handleRadioChange(option) {
  //     // Logic to open or close the dialog based on the selected radio button
  //     if (this[option] === 'Individual' || this[option] === 'Booth' || this[option] === 'Forum') {
  //       this.dialogs[option] = true; // Open the dialog
  //     } else {
  //       this.dialogs[option] = false; // Close the dialog
  //     }
  //   }
  // }
    handleRadioChange() {
      console.log('Hello:', this.dialogs)
      // Logic to open or close the dialog based on the selected radio button
      if (this.dialogs.Individual === 'Individual') {
        this.dialog = true; // Open the dialog
      } else if (this.dialogs.Booth === 'Booth') {
        this.dialog = true; // Open the dialog
      }
      else this.dialog = this.dialogs.Forum === 'Forum';
    }
  }
};
</script>


<!--<template>-->
<!--  <v-card-->
<!--    class="mx-auto"-->
<!--    width="800"-->
<!--    prepend-icon="mdi-home"-->
<!--  >-->
<!--    <template v-slot:title>-->
<!--      Select Category you want to Register-->
<!--    </template>-->

<!--    <v-card-text>-->
<!--      <v-row style="margin-left: 48%"><h4>Categories</h4>-->
<!--      </v-row>-->
<!--      <v-row>-->
<!--        <v-col style="text-align: center">-->
<!--        <v-radio-group-->
<!--          style="margin-left: 35%"-->
<!--          @change="handleRadioChange"-->
<!--          v-model="inline"-->
<!--          inline-->
<!--        >-->
<!--          <v-radio-->
<!--            label="Individual"-->
<!--            value="Individual"-->
<!--          ></v-radio>-->
<!--          <v-radio-->
<!--            label="Booth"-->
<!--            value="Booth"-->
<!--          ></v-radio>-->
<!--          <v-radio-->
<!--            label="Forum"-->
<!--            value="Forum"-->
<!--          ></v-radio>-->
<!--        </v-radio-group>-->
<!--        </v-col>-->
<!--      </v-row>-->
<!--    </v-card-text>-->
<!--  </v-card>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  data () {-->
<!--    return {-->
<!--      column: null,-->
<!--      inline: null,-->
<!--      dialog: false-->
<!--    };-->
<!--  },-->
<!--  methods: {-->
<!--    handleRadioChange() {-->
<!--      // Logic to open or close the dialog based on the selected radio button-->
<!--      if (this.inline === 'Individual') {-->
<!--        this.dialog = true; // Open the dialog-->
<!--      } else {-->
<!--        this.dialog = false; // Close the dialog-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--};-->
<!--}-->
<!--</script>-->
