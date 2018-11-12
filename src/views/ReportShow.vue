<template>
  <div class="report-show">
    <h2>Today's Score:</h2>
    <h1>{{ daily_score.daily_score }}</h1>
    <div>View Your Stats:
      <a href="#/sleep_stats">Sleep Stats</a>
      <br>
      <a href="#/movement_stats">Movement Stats</a>
      <br>
      <a href="#/nutrition_stats">Nutrition Stats</a>
      <br>
      <a href="#/stress_stats">Stress Stats</a>
      <br>
      <a href="#/gratitude_index">All Your Gratitudes</a>
    </div>
  </div>
</template>

<style>
.report-show {
  margin-top: 120px;
  text-align: center;
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