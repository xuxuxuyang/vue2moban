import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

//引入home模块的小仓库
import home from "./home";

export default new Vuex.Store({
  modules: {
    //小模块仓库
    home,
  },
  state: {},
  mutations: {},
  actions: {},
});
