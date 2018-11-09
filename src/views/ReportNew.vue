<template>
  <div class="report-new">
    <h1>Daily Score</h1>
<!--     <h3>{{movement_report.today_score}}</h3>
 -->    <div>View Your Stats:
      <br>
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
.report-new {
  margin-top: 120px;
  text-align: center;
}
</style>

<script>
export default {
  data: function() {
    return {
      daily_reports: []
    };
  },
  created: function() {},
  methods: {
      addReport: function() {
        var params = {
                      count: this.newReport.count
                      };

        axios
        .get("http://localhost:3000/api/movement_reports", params)
        .then(response => {
          this.movement_reports = response.data
        });
      }
    },
    computed: {}
  };
  </script>