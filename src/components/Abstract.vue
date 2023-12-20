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
                    <v-col cols="12" md="4">
                      <v-select
                        v-model="category"
                        :items="['Student', 'Non Student']"
                        label="Select Category"
                      >
                        <template #append-outer>
                          <v-icon @click="clearSelection">mdi-close-circle</v-icon>
                        </template>
                      </v-select>
                    </v-col>

                    <v-col cols="12" md="4">
                      <v-select
                        v-model="country"
                        :items="['Tanzania', 'Kenya', 'Uganda']"
                        label="Select Country"
                      >
                        <template #append-outer>
                          <v-icon @click="clearSelection">mdi-close-circle</v-icon>
                        </template>
                      </v-select>
                    </v-col>

                    <v-col cols="12" md="4">
                      <v-select
                        v-model="gender"
                        :items="['Male', 'Female']"
                        label="Select Gender"
                      >
                        <template #append-outer>
                          <v-icon @click="clearSelection">mdi-close-circle</v-icon>
                        </template>
                      </v-select>
                    </v-col>
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
                    <v-col cols="12" md="4">
                      <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="E-mail"
                        hide-details
                        required
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="4">
                      <v-text-field
                        v-model="password"
                        :rules="passwordRules"
                        label="Password"
                        hide-details
                        required
                        type="password"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="4">
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
                    <v-col cols="6" md="12">
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
                      <v-btn @click="closeDialog('dialog1')">Cancel</v-btn>
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
<!--&lt;!&ndash;              <h3 style="text-align: center; margin-top: 20px">Conference Registration Form</h3>&ndash;&gt;-->
<!--              &lt;!&ndash; Form Content &ndash;&gt;-->
<!--              <v-form v-model="valid" @submit.prevent="submitForm">-->
<!--                <v-container fluid fill-height>-->
<!--                  &lt;!&ndash; Select Category &ndash;&gt;-->
<!--                  <v-row align="center" justify="center">-->
<!--                    <v-col cols="12" md="6">-->
<!--                      <v-select-->
<!--                        v-model="selectedItem"-->
<!--                        :items="['Student', 'Non Student']"-->
<!--                        label="Select Category"-->
<!--                      >-->
<!--                        <template #append-outer>-->
<!--                          <v-icon @click="clearSelection">mdi-close-circle</v-icon>-->
<!--                        </template>-->
<!--                      </v-select>-->
<!--                    </v-col>-->

<!--                    <v-col cols="12" md="6">-->
<!--                      <v-select-->
<!--                        v-model="selectedItem"-->
<!--                        :items="['Tanzania', 'Kenya', 'Uganda']"-->
<!--                        label="Select Country"-->
<!--                      >-->
<!--                        <template #append-outer>-->
<!--                          <v-icon @click="clearSelection">mdi-close-circle</v-icon>-->
<!--                        </template>-->
<!--                      </v-select>-->
<!--                    </v-col>-->
<!--                  </v-row>-->
<!--                  <v-row>-->
<!--                    <h4>Gender</h4>-->
<!--                    <hr>-->
<!--                    <v-radio-group-->
<!--                      v-model="inline"-->
<!--                      inline-->
<!--                    >-->
<!--                      <v-radio-->
<!--                        label="Male"-->
<!--                        value="Male"-->
<!--                      ></v-radio>-->
<!--                      <v-radio-->
<!--                        label="Female"-->
<!--                        value="Female"-->
<!--                      ></v-radio>-->
<!--                    </v-radio-group>-->
<!--                  </v-row>-->

<!--                  &lt;!&ndash; Name Fields &ndash;&gt;-->
<!--                  <v-row align="center" justify="center">-->
<!--                    <v-col cols="12" md="4">-->
<!--                      <v-text-field-->
<!--                        v-model="firstname"-->
<!--                        :rules="nameRules"-->
<!--                        :counter="10"-->
<!--                        label="First name"-->
<!--                        required-->
<!--                        hide-details-->
<!--                      ></v-text-field>-->
<!--                    </v-col>-->

<!--                    <v-col cols="12" md="4">-->
<!--                      <v-text-field-->
<!--                        v-model="middlename"-->
<!--                        :rules="nameRules"-->
<!--                        :counter="10"-->
<!--                        label="Middle name"-->
<!--                        required-->
<!--                        hide-details-->
<!--                      ></v-text-field>-->
<!--                    </v-col>-->

<!--                    <v-col cols="12" md="4">-->
<!--                      <v-text-field-->
<!--                        v-model="lastname"-->
<!--                        :rules="nameRules"-->
<!--                        :counter="10"-->
<!--                        label="Last name"-->
<!--                        hide-details-->
<!--                        required-->
<!--                      ></v-text-field>-->
<!--                    </v-col>-->
<!--                  </v-row>-->

<!--                  &lt;!&ndash; Email and Phone Number Fields &ndash;&gt;-->
<!--                  <v-row align="center" justify="center">-->
<!--                    <v-col cols="12" md="6">-->
<!--                      <v-text-field-->
<!--                        v-model="email"-->
<!--                        :rules="emailRules"-->
<!--                        label="E-mail"-->
<!--                        hide-details-->
<!--                        required-->
<!--                      ></v-text-field>-->
<!--                    </v-col>-->

<!--                    <v-col cols="12" md="6">-->
<!--                      <v-text-field-->
<!--                        v-model="phoneNumber"-->
<!--                        :rules="phoneRules"-->
<!--                        label="Phone Number"-->
<!--                        @input="formatPhoneNumber"-->
<!--                        hide-details-->
<!--                        required-->
<!--                      ></v-text-field>-->
<!--                    </v-col>-->
<!--                  </v-row>-->

<!--                  &lt;!&ndash; Description Field &ndash;&gt;-->
<!--                  <v-row align="center" justify="center">-->
<!--                    <v-col cols="12" md="12">-->
<!--                      <v-textarea-->
<!--                        v-model="description"-->
<!--                        :counter="300"-->
<!--                        label="Description"-->
<!--                        placeholder="Enter your description here..."-->
<!--                      ></v-textarea>-->
<!--                    </v-col>-->
<!--                  </v-row>-->

<!--                  &lt;!&ndash; Buttons &ndash;&gt;-->
<!--                  <v-row class="mt-4">-->
<!--                    &lt;!&ndash; Cancel Button &ndash;&gt;-->
<!--                    <v-col>-->
<!--                      <v-btn @click="cancelForm">Cancel</v-btn>-->
<!--                    </v-col>-->
<!--                    &lt;!&ndash; Reset Button &ndash;&gt;-->
<!--                    <v-col>-->
<!--                      <v-btn @click="resetForm" color="error">Reset</v-btn>-->
<!--                    </v-col>-->
<!--                    &lt;!&ndash; Submit Button &ndash;&gt;-->
<!--                    <v-col>-->
<!--                      <v-btn type="submit" color="primary">Submit</v-btn>-->
<!--                    </v-col>-->
<!--                  </v-row>-->
<!--                </v-container>-->
<!--              </v-form>-->
<!--            </v-card>-->
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
      nameRules: [],
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
