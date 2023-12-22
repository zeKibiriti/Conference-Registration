<template>
  <v-container class="mt-12">
<!--    <v-card flat class="mx-auto" width="900">-->
      <span class="grey--text"
        ><h2 class="color-title">Select Category to Register</h2></span
      >
      <!-- Horizontal line (hr) -->
      <hr class="centered-line" />
    <v-card>
      <v-row class="text-center">
        <v-col>
          <v-card-text class="pa-10">
            <v-row style="margin-left: 48%"><h4>Categories</h4> </v-row>
            <v-col style="text-align: center">
<!--              @change="handleRadioChange"-->
              <v-radio-group
                @click="openDialog('dialog1')"
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
      <div style="background-color: rgb(242, 242, 242); ruby-position: under">
        <table>
          <thead class="custom-th">
            <tr>
              <th>S/No</th>
              <th>Category Name</th>
              <th>Fees</th>
              <th>Actions</th>
            </tr>
          </thead>
          <!--          <hr />-->
          <tbody>
            <tr>
              <td>1.</td>
              <td>Health Worker</td>
              <td>100,000 TShs.</td>
              <v-btn type="submit" color="primary" @click="openDialog('dialog2')">View Details</v-btn>
            </tr>
            <tr>
              <td>2.</td>
              <td>University Student</td>
              <td>100,000 TShs.</td>
              <v-btn type="submit" color="primary" @click="openDialog('dialog3')">View Details</v-btn>
            </tr>
            <tr>
              <td>3.</td>
              <td>Non student</td>
              <td>150,000 TShs.</td>
              <v-btn type="submit" color="primary" @click="openDialog('dialog4')">View Details</v-btn>
            </tr>
            <tr>
              <td>4.</td>
              <td>Foreigner/international</td>
              <td>£USD 100</td>
              <v-btn type="submit" color="primary" @click="openDialog('dialog5')">View Details</v-btn>
            </tr>
            <tr>
              <td>5.</td>
              <td>Booth</td>
              <td>2,000,000 TSh.</td>
              <v-btn type="submit" color="primary" @click="openDialog('dialog6')">View Details</v-btn>
            </tr>
            <tr>
              <td>6.</td>
              <td>Forum</td>
              <td>10,000,000 TSh.</td>
              <v-btn type="submit" color="primary" @click="openDialog('dialog7')">View Details</v-btn>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Horizontal line (hr) -->
      <hr />
      <!--      <h4>HELLO</h4>-->
      <v-dialog v-model="dialogs.dialog1" max-width="800px">
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
                  <v-btn @click="closeDialog('dialog1')">Cancel</v-btn>
                </v-col>
                <!-- Reset Button -->
                <v-col>
                  <v-btn @click="resetForm" color="error">Reset</v-btn>
                </v-col>
                <!-- Submit Button -->
                <v-col>
                  <v-btn type="submit" color="primary" @click="postData">Submit</v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card>
      </v-dialog>

      <v-dialog v-model="dialogs.dialog2" max-width="500">
        <v-card>
          <v-card-title style="background-color: teal;">
            Package Details
<!--            <v-btn icon @click="closeDialog('dialog1')">-->
<!--              <v-icon>mdi-close</v-icon>-->
<!--            </v-btn>-->
          </v-card-title>

          <v-card-text>
            <!-- Content of Dialog 1 goes here -->
            <ol>
              <li>Trophy and certificate</li>
              <li>Inclusion of the organization logo in the official banner for sponsors</li>
              <li>Display of advert and a short clip of the organization’s services in the registration portal and conference screens</li>
              <li>Free participation of 4 representatives</li>
              <li>2 Minutes talk, in the Main Hall, about their businesses</li>
              <li>2 Booths</li>
            </ol>
          </v-card-text>

          <v-card-actions>
            <v-btn @click="closeDialog('dialog2')">Close</v-btn>
<!--            <v-btn color="primary" @click="performAction('dialog2')">Perform Action</v-btn>-->
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog v-model="dialogs.dialog3" max-width="500">
        <v-card>
          <v-card-title style="background-color: teal;">
            Package Details
<!--            <v-btn icon @click="closeDialog('dialog1')">-->
<!--              <v-icon>mdi-close</v-icon>-->
<!--            </v-btn>-->
          </v-card-title>

          <v-card-text>
            <!-- Content of Dialog 1 goes here -->
            <ol>
              <li>Trophy and certificate</li>
              <li>Inclusion of the organization logo in the official banner for sponsors</li>
              <li>Display of advert and a short clip of the organization’s services in the registration portal and conference screens</li>
              <li>Free participation of 4 representatives</li>
              <li>2 Minutes talk, in the Main Hall, about their businesses</li>
              <li>2 Booths</li>
            </ol>
          </v-card-text>

          <v-card-actions>
            <v-btn @click="closeDialog('dialog3')">Close</v-btn>
<!--            <v-btn color="primary" @click="performAction('dialog2')">Perform Action</v-btn>-->
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog v-model="dialogs.dialog4" max-width="500">
        <v-card>
          <v-card-title style="background-color: teal;">
            Package Details
            <!--            <v-btn icon @click="closeDialog('dialog1')">-->
            <!--              <v-icon>mdi-close</v-icon>-->
            <!--            </v-btn>-->
          </v-card-title>

          <v-card-text>
            <!-- Content of Dialog 1 goes here -->
            <ol>
              <li>Trophy and certificate</li>
              <li>Inclusion of the organization logo in the official banner for sponsors</li>
              <li>Display of advert and a short clip of the organization’s services in the registration portal and conference screens</li>
              <li>Free participation of 4 representatives</li>
              <li>2 Minutes talk, in the Main Hall, about their businesses</li>
              <li>2 Booths</li>
            </ol>
          </v-card-text>

          <v-card-actions>
            <v-btn @click="closeDialog('dialog4')">Close</v-btn>
            <!--            <v-btn color="primary" @click="performAction('dialog2')">Perform Action</v-btn>-->
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog v-model="dialogs.dialog5" max-width="500">
        <v-card>
          <v-card-title style="background-color: teal;">
            Package Details
            <!--            <v-btn icon @click="closeDialog('dialog1')">-->
            <!--              <v-icon>mdi-close</v-icon>-->
            <!--            </v-btn>-->
          </v-card-title>

          <v-card-text>
            <!-- Content of Dialog 1 goes here -->
            <ol>
              <li>Trophy and certificate</li>
              <li>Inclusion of the organization logo in the official banner for sponsors</li>
              <li>Display of advert and a short clip of the organization’s services in the registration portal and conference screens</li>
              <li>Free participation of 4 representatives</li>
              <li>2 Minutes talk, in the Main Hall, about their businesses</li>
              <li>2 Booths</li>
            </ol>
          </v-card-text>

          <v-card-actions>
            <v-btn @click="closeDialog('dialog5')">Close</v-btn>
            <!--            <v-btn color="primary" @click="performAction('dialog2')">Perform Action</v-btn>-->
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog v-model="dialogs.dialog6" max-width="500">
        <v-card>
          <v-card-title style="background-color: teal;">
            Package Details
            <!--            <v-btn icon @click="closeDialog('dialog1')">-->
            <!--              <v-icon>mdi-close</v-icon>-->
            <!--            </v-btn>-->
          </v-card-title>

          <v-card-text>
            <!-- Content of Dialog 1 goes here -->
            <ol>
              <li>Trophy and certificate</li>
              <li>Inclusion of the organization logo in the official banner for sponsors</li>
              <li>Display of advert and a short clip of the organization’s services in the registration portal and conference screens</li>
              <li>Free participation of 4 representatives</li>
              <li>2 Minutes talk, in the Main Hall, about their businesses</li>
              <li>2 Booths</li>
            </ol>
          </v-card-text>

          <v-card-actions>
            <v-btn @click="closeDialog('dialog6')">Close</v-btn>
            <!--            <v-btn color="primary" @click="performAction('dialog2')">Perform Action</v-btn>-->
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog v-model="dialogs.dialog7" max-width="500">
        <v-card>
          <v-card-title style="background-color: teal;">
            Package Details
            <!--            <v-btn icon @click="closeDialog('dialog1')">-->
            <!--              <v-icon>mdi-close</v-icon>-->
            <!--            </v-btn>-->
          </v-card-title>

          <v-card-text>
            <!-- Content of Dialog 1 goes here -->
            <ol>
              <li>Trophy and certificate</li>
              <li>Inclusion of the organization logo in the official banner for sponsors</li>
              <li>Display of advert and a short clip of the organization’s services in the registration portal and conference screens</li>
              <li>Free participation of 4 representatives</li>
              <li>2 Minutes talk, in the Main Hall, about their businesses</li>
              <li>2 Booths</li>
            </ol>
          </v-card-text>

          <v-card-actions>
            <v-btn @click="closeDialog('dialog7')">Close</v-btn>
            <!--            <v-btn color="primary" @click="performAction('dialog2')">Perform Action</v-btn>-->
          </v-card-actions>
        </v-card>
      </v-dialog>

    </v-card>
    <div>
      <table>
        <thead>
        <tr style="text-align: left">
          <th>S/No</th>
          <th>First Name</th>
          <th>Middle Name</th>
          <th>Last Name</th>
          <th>Country</th>
          <th>Category</th>
          <th>Email</th>
          <th>Phone Number</th>
          <!--            <th>Description</th>-->
          <!-- Add more headers as needed -->
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item, index) in fetchedData" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ item.firstname }}</td>
          <td>{{ item.middlename }}</td>
          <td>{{ item.lastname }}</td>
          <td>{{ item.country }}</td>
          <td>{{ item.category }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.phoneNumber }}</td>
          <!--            <td>{{ item.description }}</td>-->
          <!-- Display more properties as needed -->
        </tr>
        </tbody>
      </table>
    </div>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      fetchedData: null,
      // postData: null,
      dialogs: {
        dialog1: false,
        dialog2: false,
        dialog3: false,
        dialog4: false,
        dialog5: false,
        dialog6: false,
        dialog7: false,
      },
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
  created() {
    // Call the fetchData method when the component is mounted
    this.fetchData();
  },
  methods: {
    async postData() {
      try {
        const response = await axios.post('http://localhost:3000/registration', {
          country: this.country,
          category: this.category,
          gender: this.gender,
          firstname: this.firstname,
          middlename: this.middlename,
          lastname: this.lastname,
          email: this.email,
          password: this.password,
          phoneNumber: this.phoneNumber,
          description: this.description,
          // Add more key-value pairs as needed
        });

        console.log('Response:', response.data);

        // Handle the response data as needed
      } catch (error) {
        console.error('Error sending POST request:', error);

        // Handle the error as needed
      }
    },

    async fetchData() {
      try {
        const response = await axios.get('http://localhost:3000/registration');
        this.fetchedData = response.data; // Update this line
        // console.log('MyData:', JSON.parse(JSON.stringify(this.fetchedData)));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },

    openDialog(dialogName) {
      this.dialogs[dialogName] = true;
    },

    closeDialog(dialogName) {
      this.dialogs[dialogName] = false;
    },

    performAction(dialogName) {
      // Logic for performing an action when a button in the dialog is clicked
      console.log(`Action performed in ${dialogName}`);
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
  /* background-color: rgb(242, 242, 242); */
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

.centered-line {
  width: 70%;
  border: 3px solid grey; /* Adjust thickness as needed */
  margin: 8px auto; /* Adjust as needed */
}
</style>
