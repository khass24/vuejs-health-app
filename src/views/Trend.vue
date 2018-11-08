<template>
  <div class="home">
    <h3>Sleep Trends</h3>
    <trend
      :data="sleep_data.sleep_array"
      :gradient="['#D65461', '#222529', '#c1c4c9']"
      auto-draw
      smooth>
    </trend>
  </div>

</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      sleep_data: {
      sleep_array: []
      }
    };
  },
  created: function() {
    axios
    .get("http://localhost:3000/api/sleep_reports")
    .then(response => {
      this.sleep_data = response.data;
    });
  },
 methods: {}
};
</script>