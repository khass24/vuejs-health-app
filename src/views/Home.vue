<template>
  <div class="home">
    <h2>Your Gratitudes</h2>
    <div class="index" v-for="gratitude in gratitudes">
      <h5>{{gratitude.message }}!</h5>
    </div>

    <div class="add">
      Today's Gratitude: <input v-model="newGratitude.message">
      <button v-on:click="addGratitude()">Add Gratitude!</button>
    </div>
  </div>
</template>

<style>
.add {
  text-align: center;
  margin-top: 20px;
}

.index {
  text-align: center;
  margin: 20px;
}

h2 {
  text-align: center;
  margin: 30px;
}

body {
  font-family: "Palatino Linotype";
}


</style>

<script>
var axios = require('axios');

export default {
  data: function() {
    return {
      message: "Health App",

      gratitudes: [],
      newGratitude: { message: ""}
    };
  },
  created: function() {
    axios
    .get("http://localhost:3000/api/gratitudes")
    .then(response => {
      this.gratitudes = response.data;
    });
  },
  methods: {
    addGratitude: function() {
      var params = {
                    message: this.newGratitude.message
                    };

      axios
      .post("http://localhost:3000/api/gratitudes", params)
      .then(response => {
        this.gratitudes.push(response.data);
        this.newGratitude = {message: ""};
      });
    }
  },
  computed: {}
};
</script>