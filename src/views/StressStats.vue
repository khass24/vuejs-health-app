<template>
  <div class="stress-stats">
    <h3>Stress Trends</h3>
    <trend
      :data="stress_data.stress_array"
      :gradient="['#D65461', 'Gold', 'ForestGreen']"
      auto-draw
      smooth
      auto-draw-duration=5000
      auto-draw-easing="ease-in">>
    </trend>
  </div>

</template>

<style>
.stress-stats {
  text-align: center;
  font-family: "Aref Ruqaa";
  margin-top: 150px;
  margin-bottom: 150px;
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