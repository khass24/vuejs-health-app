<template>
  <div class="home">
    <h2>Nutrition Page</h2>
  </div>
</template>

<style>
</style>

<script>
var axios = require('axios');

export default {
  data: function() {
    return {
      nutrition: [],
      newNutrition: { count: ""}
    };
  },
  created: function() {},
  methods: {
    addNutrition: function() {
      var params = {
                    count: this.newNutrition.count
                    };

    axios
    .post("http://localhost:3000/api/nutrition_reports", params)
    .then(response => {
      this.nutrition.push(response.data);
      this.$router.push('/stress');
    });
    }
  },
  computed: {}
};
</script>