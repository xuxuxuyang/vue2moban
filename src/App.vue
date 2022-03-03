<template>
  <div id="app">
    <div id="nav">
      <button @click="to">路由点击跳到About页面</button>
    </div>
    <div>api请求的数据：{{ categoryList }}</div>
    <router-view />
  </div>
</template>
<script>
// var _ = require("lodash");
//按需引入lodash函数
var debounce = require("lodash/debounce");
var throttle = require("lodash/throttle");
//VueX的映射第一步
import { mapState } from "vuex";
export default {
  methods: {
    to() {
      this.$router.push({
        name: "About", //用name   path不能和params一起使用
        params: { id: "" || undefined }, //利用undefined保证路由跳转携带基本路径
        query: { a: 666, b: 888, c: 999 },
      });
    },
    //lodash防抖函数：
    // 相当于把需要防抖的函数包装一遍->设置时间->规定的时间内只执行一次（且前面触发的都取消）->就执行一次
    fangdou() {
      //回调函数别用箭头函数
      debounce(function () {
        console.log("需要防抖执行的函数222");
      }, 1000);
    },
    //lodash节流函数：
    // 相当于把需要节流的函数包装一遍->设置时间->先立即执行一遍->规定的时间内只执行一次（前面触发的不会取消）->可以执行多次
    jieliu() {
      //回调函数别用箭头函数
      throttle(function () {
        console.log("需要节流执行的函数111");
      }, 2000);
    },
  },
  mounted() {
    //请求数据
    // this.$store.dispatch("home/getCategoryList");
    // this.$store.commit("home/GETCATEGORYLIST", payload);
    // this.fangdou(), this.jieliu();
  },
  computed: {
    //VueX的映射第二步
    ...mapState({
      categoryList: (state) => state.home.categoryList,
    }),
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
