// 使用 Mock
var Mock = require("mockjs");
import home from "./home.json";

Mock.mock("/mock/home", {
  code: 200,
  data: home,
});
