<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <span class="btn" v-if="isQiankun" @click="changeParentState">主项目的数据：{{ commonData.parent }}点击变为2</span>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  data() {
    return {
      isQiankun: window.__POWERED_BY_QIANKUN__,
    };
  },
  computed: {
    commonData() {
      return this.isQiankun ? this.$root.parentVuex.state.commonData : '';
    },
  },
  mounted() {
    console.log('app-vue-hash Home.vue mounted');
  },
  methods: {
    changeParentState() {
      if (this.isQiankun) {
        this.$root.parentVuex.commit('setCommonData', { parent: 2 });
        console.log(this.$root.parentVuex, '主应用--common state');
      }
    },
  },
};
</script>

<style scoped>
.btn {
  font-weight: bold;
  color: #2c3e50;
  cursor: pointer;
  margin: 0 15px;
  text-decoration: underline;
}
</style>
