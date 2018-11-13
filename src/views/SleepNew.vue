<template>
  <div class="sleep-new">
    <form v-on:submit.prevent="addSleep()">
      <div class="form-group">
        <h1>How many hours of sleep did you get last night?</h1> 
        <br>
        <input style="font-size:25px" type="text" class="form-control-sm" v-model="newSleep.count">
      </div>
      <input type="submit" class="btn btn-primary" value="Add Sleep" @click="addSleep()">
    </form>
    </div>
  </div>
</template>

<style>
.sleep-new {
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
      sleep: [],
      newSleep: { count: ""}
    };
  },
  created: function() {},
  methods: {
    addSleep: function() {
      var params = {
                    count: this.newSleep.count
                    };

      axios
      .post("http://localhost:3000/api/sleep_reports", params)
      .then(response => {
        this.sleep.push(response.data);
        this.$router.push('/movement');
      });
    }
  },
  computed: {}
};
</script>