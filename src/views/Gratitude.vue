<template>
  <div class="home">
    <h2>What are you grateful for today?</h2>

    <div class="add">
      <input v-model="newGratitude.message">
      <button v-on:click="addGratitude()">Submit</button>
    </div>
  </div>
</template>

<style>

.home {
  margin-top: 120px;
}

.add {
  text-align: center;
  margin-top: 10px;
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