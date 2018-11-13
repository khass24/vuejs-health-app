<template>
  <section>
    <div class="gratitudes-index">
      <div class="text-center">
        <h1>Your Gratitudes <img src="https://d19m59y37dris4.cloudfront.net/appton/1-0/img/placeholder.svg" alt="" height="50" width="40"></h1>
      </div>
      <div class="integrations mt-5">
        <div class="row">
          <div class="col-lg-3" v-for="gratitude in gratitudes">
            <div class="box text-center">
              <h5 class="card-title">{{gratitude.message}}</h5>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.gratitudes-index {
  margin-top: 30px;
  text-align: center;
  padding-bottom: 50px;
  font-family: "Aref Ruqaa";
}

.col-lg-3:hover {
  background: #E7475E;
  color: #fff;
  text-decoration-color: white;
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