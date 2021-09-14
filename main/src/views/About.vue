<template>
  <div class="about">
    <h1>This is parent about page</h1>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log('main-vue-window.a', window.a);
  },
};
</script>
<style scoped>
h1 {
  color: green;
}
</style>
