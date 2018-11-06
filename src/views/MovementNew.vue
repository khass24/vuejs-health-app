<template>
  <div class="home">
    <h2>Movement Page</h2>
  </div>
</template>

<style>
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