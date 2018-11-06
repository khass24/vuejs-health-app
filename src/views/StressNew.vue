<template>
  <div class="home">
    <h2>Stress Page</h2>
  </div>
</template>

<style>
</style>

<script>
var axios = require('axios');

export default {
  data: function() {
    return {
      stress: [],
      newStress: { count: ""}
    };
  },
  created: function() {},
  methods: {
    addStress: function() {
      var params = {
                    count: this.newStress.count
                    };

    axios
    .post("http://localhost:3000/api/stress_reports", params)
    .then(response => {
      this.stress.push(response.data);
      this.$router.push('/report');
    });
    }
  },
  computed: {}
};
</script>