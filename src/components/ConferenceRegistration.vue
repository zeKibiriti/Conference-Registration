<template>
  <v-container class="mt-12">
    <v-card flat class="mx-auto" width="800">
      <span class="grey--text"
        ><h2 class="color-title">Select Category to Register</h2></span
      >

      <v-row class="text-center">
        <v-col>
          <!-- Horizontal line (hr) -->
          <hr />

          <v-card-text class="pa-10">
            <v-row style="margin-left: 48%"><h4>Categories</h4> </v-row>
            <v-col style="text-align: center">
              <v-radio-group
                @change="handleRadioChange"
                style="margin-left: 35%"
                v-model="inline"
                inline
              >
                <v-radio label="Individual" value="Individual"></v-radio>
                <v-radio label="Booth" value="Booth"></v-radio>
                <v-radio label="Forum" value="Forum"></v-radio>
              </v-radio-group>
            </v-col>
          </v-card-text>
        </v-col>
      </v-row>
      <!-- Horizontal line (hr) -->
      <hr />
      <div style="background-color: gray; ruby-position: under">
        <table>
          <thead class="custom-th">
          <tr>
            <th>S/No</th>
            <th>Category Name</th>
            <th>Fees</th>
          </tr>
          </thead>
<!--          <hr />-->
          <tbody>
          <tr>
            <td>1.</td>
              <td>Health Worker</td>
            <td>100,000 TShs.</td>
          </tr>
          <tr>
            <td>2.</td>
              <td>University Student</td>
              <td>100,000 TShs.</td>
          </tr>
          <tr>
            <td>3.</td>
            <td>Non student</td>
            <td>150,000 TShs.</td>
          </tr>
          <tr>
            <td>4.</td>
            <td>Foreigner/international</td>
            <td>£USD 100</td>
          </tr>
          <tr>
            <td>5.</td>
            <td>Booth</td>
            <td>2,000,000 TSh.</td>
          </tr>
          <tr>
            <td>6.</td>
            <td>Forum</td>
            <td>10,000,000 TSh.</td>
          </tr>
          </tbody>
        </table>
      </div>
      <!-- Horizontal line (hr) -->
      <hr />
<!--      <h4>HELLO</h4>-->
      <v-dialog v-model="modalVisible" max-width="800px">
        <v-card>
          <h3 style="text-align: center; margin-top: 20px">
            Conference Registration Form
          </h3>
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
                  <v-btn @click="closeModal">Cancel</v-btn>
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
        <!--        <v-card>-->
        <!--          <v-card-title>Modal Title</v-card-title>-->
        <!--          <v-card-text>-->
        <!--            &lt;!&ndash; Modal content goes here &ndash;&gt;-->
        <!--            This is the content of the modal.-->
        <!--          </v-card-text>-->
        <!--          <v-card-actions>-->
        <!--            <v-btn @click="closeModal">Close</v-btn>-->
        <!--          </v-card-actions>-->
        <!--        </v-card>-->
      </v-dialog>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      valid: true,
      inline: true,
      selectedOption: null,
      modalVisible: false,
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
        (v) => /[A-Z]/.test(v) || "Password must contain at least one uppercase letter",
        (v) => /[a-z]/.test(v) || "Password must contain at least one lowercase letter",
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
    handleRadioChange() {
      // Show the modal when a radio button is selected
      this.modalVisible = true;
    },
    closeModal() {
      // Close the modal
      this.modalVisible = false;
    },
    submitForm() {
      // Your form submission logic here
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
      this.description = "";
      // Reset validation state if using validation
      this.$refs.submitForm?.resetValidation(); // Replace "form" with the ref attribute of your form element
    },
    clearSelection() {
      this.category = null;
    },
    cancelForm() {
      // Handle cancel logic
      this.dialog = false;
    },
    formatPhoneNumber() {
      // Handle phone number formatting logic
    },

  },
};
</script>
<style>
/* Add your custom styles here */
.color-title {
  color: grey;
}
.custom-th {
  /* Add your custom styles for the table header cells */
  padding-right: 1000px; /* Adjust the padding as needed */
  text-align: left;
  /* Add any other styles as needed */
}
td {
  padding-right: 100px;
  text-align: left;
  /*border: 1px solid #ccc;*/
}
</style>
