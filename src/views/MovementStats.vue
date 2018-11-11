<template>
  <div class="home">
    <h3>Movement Trends</h3>
    <trend
      :data="movement_data.movement_array"
      :gradient="['#D65461', 'Gold', 'LawnGreen']"
      auto-draw
      smooth
      auto-draw-duration=5000
      auto-draw-easing="ease-in">
    </trend>
  </div>

</template>

<style>
h3 {
  text-align: center;
  font-family: "Aref Ruqaa";
}
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      movement_data: {
      movement_array: []
      }
    };
  },
  created: function() {
    axios
    .get("http://localhost:3000/api/movement_reports")
    .then(response => {
      this.movement_data = response.data;
    });
  },
 methods: {}
};
</script>