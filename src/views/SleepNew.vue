<template>
  <div class="sleep-new">
    <form>
      <div class="form-group">
        <h2>How many hours of sleep did you get last night?</h2> 
        <input type="text" class="form-control-sm" v-model="newSleep.count">
      </div>
      <input type="submit" class="btn btn-primary" value="Add Sleep" @click="addSleep()">
    </form>
    </div>
  </div>
</template>

<style>
.sleep-new {
  margin-top: 120px;
  text-align: center;
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
        this.newSleep = {count: ""};
        this.$router.push('/movement');
      });
    }
  },
  computed: {}
};
</script>