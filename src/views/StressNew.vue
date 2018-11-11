<template>
  <div class="stress-new">
    <form v-on:submit.prevent="addStress()">
      <div class="form-group">
        <h2>On a scale of 1 to 10 (10 being the best), how well did you manage your stress today?</h2> 
        <input type="text" class="form-control-sm" v-model="newStress.count">
      </div>
      <input type="submit" class="btn btn-primary" value="See Daily Score" @click="addStress()">
    </form>
    </div>
  </div>
</template>

<style>
.stress-new {
  margin-top: 120px;
  text-align: center;
}
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