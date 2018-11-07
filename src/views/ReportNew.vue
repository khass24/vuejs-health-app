<template>
  <div class="home">
    <h1>{{ message }}</h1>
  </div>
</template>

<style>
.home {
  text-align: center;
}
</style>

<script>
export default {
  data: function() {
    return {
      message: "Daily Report"
    };
  },
  created: function() {},
  methods: {},
  computed: {}
};
</script>