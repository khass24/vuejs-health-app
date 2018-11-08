<template>
  <div class="report-new">
    <h1>Daily Score</h1>
<!--     <h2> {{ DailyReport.today }}</h2>
 -->  </div>
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
      message: "Daily Report"
    };
  },
  created: function() {},
  methods: {
      addReport: function() {
        var params = {
                      count: this.newReport.count
                      };

        axios
        .post("http://localhost:3000/api/sleep_reports", params)
        .then(response => {
          this.sleep.push(response.data);
          this.newSleep = {count: ""};
          this.$router.push('/movement');
        });
      }
    },
    computed: {}
  };
  </script>