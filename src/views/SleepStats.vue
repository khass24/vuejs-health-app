<template>
  <div class="sleep_stats">
    <h3>Sleep Trends</h3>
    <trend
      :data="sleep_data.sleep_array"
      :gradient="['#D65461', 'Gold', 'LawnGreen']"
      auto-draw
      smooth
      auto-draw-duration=5000
      auto-draw-easing="ease-in">>
    </trend>
  </div>

</template>

<style>
.sleep_stats {
  text-align: center;
  font-family: "Aref Ruqaa";
  margin-top: 120px;
}
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