<template>
  <div class="movement-new">
    <form v-on:submit.prevent="addMovement()">
      <div class="form-group">
        <h2>What was your step count today?</h2> 
        <input type="text" class="form-control-sm" v-model="newMovement.count">
      </div>
      <input type="submit" class="btn btn-primary" value="Add Movement" @click="addMovement()">
    </form>
    </div>
  </div>
</template>

<style>
.movement-new {
  margin-top: 200px;
  text-align: center;
  margin-bottom: 150px;
}
</style>

<script>
var axios = require('axios');

export default {
  data: function() {
    return {
      movement: [],
      newMovement: { count: ""}
    };
  },
  created: function() {},
  methods: {
    addMovement: function() {
      var params = {
                    count: this.newMovement.count
                    };

    axios
    .post("http://localhost:3000/api/movement_reports", params)
    .then(response => {
      this.movement.push(response.data);
      this.$router.push('/nutrition');
    });
    }
  },
  computed: {}
};
</script>