<template>
  <div class="gratitudes-index">
    <h2>Your Gratitudes</h2>
    <div class="row">
      <div class="col-md-12" v-for="gratitude in gratitudes">
        <div class="card" style="width: 70rem;">
          <div class="card-body bg-light">
            <h5 class="card-title">{{gratitude.message}}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

h2 {
  text-align: center;
  margin-top: 90px;
}

.gratitudes-index {
  text-align: center;
  padding-bottom: 140px;
}

.card {
  align-content: center;
}

</style>

<script>
var axios = require("axios");

export default {
  data: function() {
    return {
      gratitudes: []
    };
  },
  created: function() {
    axios
    .get("http://localhost:3000/api/gratitudes")
    .then(response => {
      this.gratitudes = response.data;
    });
  },
  methods: {},
  computed: {}
};
</script>