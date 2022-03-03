//1.引入api接口函数
import { gethomedata } from "@/axios/api";

//2.创建home模块的仓库
const state = {
  categoryList: [],
};
const mutations = {
  GETCATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList;
  },
};
const actions = {
  async getCategoryList({ commit }) {
    let result = await gethomedata();
    if (result.code == 200) {
      commit("GETCATEGORYLIST", result.data);
    }
  },
};
const getters = {};

// 3.导出小仓库
export default {
  namespaced: true, //打开命名空间
  state,
  mutations,
  actions,
  getters,
};
