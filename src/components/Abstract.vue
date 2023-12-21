<template>
  <!-- About page content -->
  <v-container class="mt-10">
    <v-row>
      <v-col cols="12">
        <h1 class="display-2 text-center mb-5 color-title">
          Abstract submission {{ currentYear }}
        </h1>
        <hr class="centered-line" />
        <v-divider class="mb-5"></v-divider>

        <!-- Sample about content -->
        <v-row>
          <v-col cols="12" md="12">
<!--            <v-card>-->
            <v-card>
              <!-- Form Content -->
              <v-form v-model="valid" @submit.prevent="submitForm">
                <v-container fluid fill-height>
                  <!-- Select Category -->
                  <v-row align="center" justify="center">
                    <v-col cols="12" md="6">
                      <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="Valid E-mail"
                        hide-details
                        required
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="6">
                      <v-text-field
                        v-model="title"
                        :rules="nameRules"
                        :counter="10"
                        label="Title"
                        required
                        hide-details
                      ></v-text-field>
                    </v-col>
                  </v-row>

                  <v-row align="center" justify="center">
                    <v-col cols="12" md="12">
                      <v-select
                        v-model="subTheme"
                        :items="['Nutrition and NCDs', 'NCD Emergency preparedness']"
                        label="Select Conference Sub-Theme"
                      >
                        <template #append-outer>
                          <v-icon @click="clearSelection">mdi-close-circle</v-icon>
                        </template>
                      </v-select>
                    </v-col>
                  </v-row>

                  <v-row align="center" justify="center">
                    <v-col cols="12" md="12">
                        <v-text-field
                          v-model="authors"
                          :rules="nameRules"
                          :counter="200"
                          label="Authors"
                          required
                          hide-details
                        ></v-text-field>
                      </v-col>
                  </v-row>
                  <v-row align="center" justify="center">
                    <v-col cols="12" md="6">
                      <v-text-field
                        v-model="affiliation"
                        :rules="nameRules"
                        :counter="200"
                        label="Affiliation"
                        required
                        hide-details
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="6">
                      <v-text-field
                        v-model="presentingAuthor"
                        :rules="nameRules"
                        :counter="200"
                        label="Presenting author"
                        required
                        hide-details
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <!-- Name Fields -->
                  <v-row align="center" justify="center">
                    <v-col cols="12" md="12">
                      <v-textarea
                        v-model="background"
                        :counter="50"
                        label="Background"
                        placeholder="Enter your background here, maximum 50 words..."
                      ></v-textarea>
                    </v-col>
                  </v-row>

                  <!-- Description Field -->
                  <v-row align="center" justify="center">
                    <v-col cols="6" md="12">
                      <v-text-field
                        v-model="objective"
                        :counter="50"
                        label="Objective/Aims"
                        placeholder="Enter your Objective/Aims here..."
                      ></v-text-field>
                    </v-col>
                  </v-row>

                  <v-row align="center" justify="center">
                    <v-col cols="12" md="12">
                      <v-textarea
                        v-model="methodology"
                        :counter="75"
                        label="Methodology/Project plan"
                        placeholder="Enter your Methodology/Project plan here, maximum 75 words..."
                      ></v-textarea>
                    </v-col>
                  </v-row>

                  <v-row align="center" justify="center">
                    <v-col cols="12" md="12">
                      <v-textarea
                        v-model="results"
                        :counter="130"
                        label="Results/Progress"
                        placeholder="Enter your Results/Progress here, maximum 130 words..."
                      ></v-textarea>
                    </v-col>
                  </v-row>

                  <v-row align="center" justify="center">
                    <v-col cols="12" md="12">
                      <v-textarea
                        v-model="conclusion"
                        :counter="15"
                        label="Conclusion/Lessons learned"
                        placeholder="Enter your Results/Progress here, maximum 15 words..."
                      ></v-textarea>
                    </v-col>
                  </v-row>

                  <v-row align="center" justify="center">
                    <v-col cols="12" md="12">
                      <v-textarea
                        v-model="recommendations"
                        :counter="15"
                        label="Recommendations"
                        placeholder="Enter your Recommendations here, maximum 15 words..."
                      ></v-textarea>
                    </v-col>
                  </v-row>

                  <v-row class="text-center">
                    <v-col>
                      <v-card-text class="pa-10" style="text-align: center">
                        <v-row><h4>I consent that my abstract be published in peer review journal</h4> </v-row>
                        <v-col>
                          <!--              @change="handleRadioChange"-->
                          <v-radio-group
                            @click="openDialog('dialog1')"
                            style="margin-left: auto"
                            v-model="inline"
                            inline
                          >
                            <v-radio label="Yes" value="Yes"></v-radio>
                            <v-radio label="No" value="No"></v-radio>
                          </v-radio-group>
                        </v-col>
                      </v-card-text>
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
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      currentYear: new Date().getFullYear(),
      valid: true,
      inline: true,
      selectedOption: null,
      // modalVisible: false,
      country: null,
      category: null,
      gender: null,
      selectedGender: null,
      selectedCategoryItem: null,
      column: null,
      firstname: "",
      middlename: "",
      lastname: "",
      email: "",
      title: "",
      authors: "",
      presentingAuthor: "",
      subTheme: "",
      affiliation: "",
      background: "",
      objective: "",
      methodology: "",
      results: "",
      conclusion: "",
      recommendations: "",
      password: "",
      passwordRules: [
        (v) => !!v || "Password is required",
        (v) => (v && v.length >= 8) || "Password must be at least 8 characters",
        (v) => /\d/.test(v) || "Password must contain at least one digit",
        (v) =>
          /[A-Z]/.test(v) ||
          "Password must contain at least one uppercase letter",
        (v) =>
          /[a-z]/.test(v) ||
          "Password must contain at least one lowercase letter",
      ],
      hasMinLength: false,
      hasUpperCase: false,
      hasLowerCase: false,
      hasDigit: false,
      emailRules: [
        (v) => !!v || "Email is required",
        (v) => /.+@.+\..+/.test(v) || "Email must be valid",
      ],
      phoneNumber: "",
      phoneRules: [
        (v) => !!v || "Phone number is required",
        (v) => /^\d{10}$/.test(v) || "Phone number must be 10 digits",
      ],
      description: "",
      nameRules: [
        (v) => !!v || 'This field is required',
      ],
    };
  },
  methods: {
    goHome() {
      this.$router.push({ path: "/" });
    },
    goAbout() {
      this.$router.push({ path: "/about" });
    },
    handleButtonClick1() {
      // Handle the first button click
    },
    resetForm() {
      // Reset form fields
      this.country = "";
      this.category = "";
      this.gender = "";
      this.firstname = "";
      this.middlename = "";
      this.lastname = "";
      this.email = "";
      this.password = "";
      this.phoneNumber = "";
      this.authors = "";
      this.title = "";
      this.affiliation = "";
      this.description = "";
      this.objective = "";
      this.methodology = "";
      this.results = "";
      this.conclusion = "";
      this.recommendations = "";
      // Reset validation state if using validation
      this.$refs.submitForm?.resetValidation(); // Replace "form" with the ref attribute of your form element
    },
    clearSelection() {
      this.category = null;
    },
    cancelForm() {
      this.$router.push({ path: "/" });
      // this.dialog = false;
    },
    formatPhoneNumber() {
      // Handle phone number formatting logic
    },
    submitForm() {
      // Your form submission logic here
    },
  },
};
</script>

<style>
/* Add your custom styles here */
.color-title {
  color: grey;
}
.centered-line {
  width: 25%;
  border: 3px solid grey; /* Adjust thickness as needed */
  margin: 8px auto; /* Adjust as needed */
}
</style>
