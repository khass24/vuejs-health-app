<template>
  <div class="home">
    <h3>Stress Trends</h3>
    <trend
      :data="stress_data.stress_array"
      :gradient="['FireBrick', 'Gold', 'ForestGreen']"
      auto-draw
      smooth
      auto-draw-duration=5000
      auto-draw-easing="ease-in">>
    </trend>
  </div>

</template>

<style>
h3 {
  text-align: center;
}
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      stress_data: {
      stress_array: []
      }
    };
  },
  created: function() {
    axios
    .get("http://localhost:3000/api/stress_reports")
    .then(response => {
      this.stress_data = response.data;
    });
  },
 methods: {}
};
</script>