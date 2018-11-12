<template>
  <div class="nutrition_stats">
    <h3>Calorie Intake Trends</h3>
    <trend
      :data="nutrition_data.nutrition_array"
      :gradient="['#D65461', 'Gold', 'LawnGreen']"
      auto-draw
      smooth
      auto-draw-duration=5000
      auto-draw-easing="ease-in">>
    </trend>
  </div>

</template>

<style>
.nutrition_stats {
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
      nutrition_data: {
      nutrition_array: []
      }
    };
  },
  created: function() {
    axios
    .get("http://localhost:3000/api/nutrition_reports")
    .then(response => {
      this.nutrition_data = response.data;
    });
  },
 methods: {}
};
</script>