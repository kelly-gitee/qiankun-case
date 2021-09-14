<template>
  <div class="about">
    <h1>This is parent about page</h1>
    <div id="appContainer"></div>
  </div>
</template>

<script>
import { start, setDefaultMountApp } from 'qiankun';
export default {
  mounted() {
    if (!window.qiankunStarted) {
      window.qiankunStarted = true;
      setDefaultMountApp('#/about/app-vue-hash');
      start();
    }
  },
};
</script>
<style scoped>
h1 {
  color: green;
}
</style>
