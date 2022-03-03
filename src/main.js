import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//引入mockjs模拟的api
import "@/mockpai";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

// var _ = require("lodash");
//按需引入lodash函数
var debounce = require("lodash/debounce");
var throttle = require("lodash/throttle");

//lodash防抖函数：
// 相当于把需要防抖的函数包装一遍->设置时间->规定的时间内只执行一次（且前面触发的都取消）->就执行一次
const fangdou = debounce(function () {
  // console.log("需要防抖执行的函数222");
}, 1000);
fangdou();

//lodash节流函数：
// 相当于把需要节流的函数包装一遍->设置时间->先立即执行一遍->规定的时间内只执行一次（前面触发的不会取消）->可以执行多次
const jieliu = throttle(function () {
  // console.log("需要节流执行的函数111");
}, 2000);
jieliu();
