<template>
  <div id="app">
    <header>
      <router-link to="/app-vue-hash">app-vue-hash</router-link>
      <router-link to="/app-vue-history">app-vue-history</router-link>
      <router-link to="/app-react">app-react</router-link>
      <router-link to="/about">about</router-link>
      <span class="btn" @click="changeParentState">主项目的数据：{{ commonData.parent }}点击变回1</span>
    </header>
    <div id="appContainer"></div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  computed: {
    commonData() {
      return this.$store.state.commonData;
    },
  },
  methods: {
    changeParentState() {
      this.$store.commit('setCommonData', { parent: 1 });
      console.log(this.$store.state, '主应用 -- common state');
    },
  },
};
</script>

<style scoped>
#app {
  text-align: center;
  position: relative;
}
header > a {
  margin: 0 20px;
}
.appContainer {
  background: #ccc;
  padding: 20px;
}
.btn {
  font-weight: bold;
  color: #2c3e50;
  cursor: pointer;
  margin: 0 15px;
  text-decoration: underline;
}
</style>
