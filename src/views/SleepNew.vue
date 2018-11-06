<template>
  <div class="sleep-new">
    <form v-on:submit.prevent="submit()">

        <div class="form-group">
          <label>Sleep:</label> 
          <input type="text" class="form-control" v-model="count">
        </div>
        <input type="submit" class="btn btn-primary" value="Submit">
      </form>
    </div>
  </div>
</template>

<style>
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