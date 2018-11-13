<template>
  <div class="signup">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h3>Sign Up</h3>
        <br>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Name:</label> 
          <input type="text" class="form-control" placeholder="First and Last" v-model="name">
        </div>
        <div class="form-group">
          <label>Email:</label>
          <input type="email" class="form-control" placeholder="Name@email.com" v-model="email">
        </div>
        <div class="form-group">
          <label>Password:</label>
          <input type="password" class="form-control" placeholder="Min 8 Characters" v-model="password">
        </div>
        <div class="form-group">
          <label>Password Confirmation:</label>
          <input type="password" class="form-control" placeholder="Re-enter Password"v-model="passwordConfirmation">
        </div>
        <input type="submit" class="btn btn-primary" value="Sign Up">
      </form>
    </div>
  </div>
</template>

<style>

  .signup {
    margin-top: 65px;
    margin-bottom: 50px;
    padding-top: 100px;
    padding-bottom: 150px;
  }

</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation
      };
      axios
        .post("http://localhost:3000/api/users", params)
        .then(response => {
          this.$router.push("/gratitude");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>