<template>
  <section class=report-show>
    <div class="integrations mt-5">
      <div class="row">
        <div class="col-lg-12">
          <div class="text-center">
            <h2>Today's Score:</h2><h1>{{ daily_score.daily_score }}</h1>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="box text-center">
            <h4>Sleep Score:</h4><h2>{{ daily_score.sleep_score }}</h2>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="box text-center">
            <h4>Move Score:</h4><h2>{{ daily_score.move_score }}</h2>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="box text-center">
            <h4>Nutrition Score:</h4><h2>{{ daily_score.nutrition_score }}</h2>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="box text-center">
            <h4>Stress Score:</h4><h2>{{ daily_score.stress_score }}</h2>
          </div>
        </div>

      </div>
    </div>

      <div class="container mb-5">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="hero-heading mb-0"></div>
              <div class="row">
                <div class="col-lg-12">
                  <div class="text-left">
                    <h3><img src="img/target.svg" alt="..." class="img-fluid" width="30px"><a href="#/sleep_stats">&nbsp;Sleep Trends</a></h3>
                    <h3><img src="img/target.svg" alt="..." class="img-fluid" width="30px"><a href="#/movement_stats">&nbsp;Movement Trends</a></h3>
                    <h3><img src="img/target.svg" alt="..." class="img-fluid" width="30px"><a href="#/nutrition_stats">&nbsp;Nutrition Trends</a></h3>
                    <h3><img src="img/target.svg" alt="..." class="img-fluid" width="30px"><a href="#/stress_stats">&nbsp;Stress Trends</a></h3>
                    <h3><img src="img/target.svg" alt="..." class="img-fluid" width="30px"><a href="#/gratitude_index">&nbsp;View Gratitudes</a></h3>
                  </div>
                </div>
               </div>
              </div>

              <div class="col-lg-6">
                <img src="img/illustration-hero.svg" alt="..." class="hero-image img-fluid d-none d-lg-block">
              </div>

            </div>
          </div>
        </div>
  </section>
</template>

<style>
</style>

<script>
var axios = require("axios");

export default {
  data: function() {
    return {
      daily_score: [],
      sleep_score: [],
      move_score: [],
      stres_score: [],
      nutrition_score: [],
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