<template>
  <div class="home">
    <h2>Report Page</h2>
  </div>
</template>

<style>
</style>

<script>
var axios = require('axios');

export default {
  data: function() {
    return {
      sleep: [],
      newSleep: { count: ""}
    };
  },
  created: function() {},
  methods: {
    addSleep: function() {
      var params = {
                    count: this.newSleep.count
                    };

    axios
    .post("http://localhost:3000/api/sleep_reports", params)
    .then(response => {
      this.sleep.push(response.data);
    }
      
    }
  },
  computed: {}
};
</script>