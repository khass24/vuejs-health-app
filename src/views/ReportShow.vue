<template>
  <div class="report-show">
    <h2>Today's Score:</h2>
    <h1>{{ daily_score.daily_score }}</h1>
    <div class="links">
      <br>
      <h5><a href="#/gratitude_index">View Gratitudes</a></h5>
      <br>
      <h5><a href="#/sleep_stats">Sleep Trends</a></h5>
      <h5><a href="#/movement_stats">Movement Trends</a></h5>
      <h5><a href="#/nutrition_stats">Nutrition Trends</a></h5>
      <h5><a href="#/stress_stats">Stress Trends</a></h5>
    </div>
  </div>
</template>

<style>
.report-show {
  margin-top: 200px;
  text-align: center;
}

.links {
  padding: 50px;
}
</style>

<script>
var axios = require("axios");

export default {
  data: function() {
    return {
      daily_score: []
    };
  },
  created: function() {
    axios
    .get("http://localhost:3000/api/daily_score")
    .then(response => {
      this.daily_score = response.data;
    });
  },
  methods: {},
  computed: {}
};
</script>