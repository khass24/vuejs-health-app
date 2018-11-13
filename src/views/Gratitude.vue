<template>
  <div class="gratitude">
    <h1>What is one thing you're grateful for today?</h1>
    <br>
    <div class="add">
      <input style="font-size:25px" v-model="newGratitude.message">
      <br>
      <br>
      <input type="submit" class="btn btn-primary" value="Be Grateful" @click="addGratitude()">
    </div>
  </div>
</template>

<style>

.gratitude {
  margin-top: 200px;
  margin-bottom: 150px;
  padding-top:50px;
  padding-bottom: 150px;
  text-align: center;
}

.add {
  text-align: center;
  margin-top: 10px;
}

.index {
  text-align: center;
  margin: 20px;
}

body {
  font-family: "Aref Ruqaa";
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
  created: function() {},
  methods: {
    addGratitude: function() {
      var params = {
                    message: this.newGratitude.message
                    };

      axios
      .post("http://localhost:3000/api/gratitudes", params)
      .then(response => {
        this.gratitudes.push(response.data);
        this.$router.push("/sleep");
      });
    }
  },
  computed: {}
};
</script>