<template>
  <div class="report-show">

    <div class="container mb-5">
      <div class="row align-items-center">
        <div class="col-lg-5">
          <h2 class="hero-heading mb-0">Today's Score:</h2>
            <h1>{{ daily_score.daily_score }}</h1>
            <br>
            <br>
            <div class="row">
              <div class="col-lg-12">
                <h4><a href="#/sleep_stats">Sleep Trends</a></h4>
                <h4><a href="#/movement_stats">Movement Trends</a></h4>
                <h4><a href="#/nutrition_stats">Nutrition Trends</a></h4>
                <h4><a href="#/stress_stats">Stress Trends</a></h4>
                <h4><a href="#/gratitude_index">View Gratitudes</a></h4>
              </div>
             </div>
          </div>
            <div class="col-lg-6"><img src="img/illustration-hero.svg" alt="..." class="hero-image img-fluid d-none d-lg-block"></div>
            </div>
        </div>
      </div>
</template>

<style>
.report-show {
  margin-top: 200px;
  padding-bottom: 150px;
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