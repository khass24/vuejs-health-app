<template>
  <div class="nutrition-new">
    <form v-on:submit.prevent="addNutrition()">
      <div class="form-group">
        <h2>What was your calorie count today?</h2> 
        <input type="text" class="form-control-sm" v-model="newNutrition.count">
      </div>
      <input type="submit" class="btn btn-primary" value="Add Nutrition" @click="addNutrition()">
    </form>
    </div>
  </div>
</template>

<style>
.nutrition-new {
  margin-top: 200px;
  text-align: center;
  margin-bottom: 150px;
  padding-top:50px;
  padding-bottom: 150px;
}
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