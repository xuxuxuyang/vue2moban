import { xyRequest } from "../index";

//home页面api地址
// const homedata = "api/product/getBaseCategoryList";

//mockapi数据
const homedata = "/mock/home";

// const gettoken = async function (payload) {
//   const { token, id } = await xyRequest.request({
//     url: "/login",
//     method: "post",
//     data: payload,
//     interceptors: {
//       responseInterceptor: (response) => {
//         return response.data;
//       },
//     },
//   });
//   return { token, id };
// };

//home页面api
const gethomedata = async function () {
  const res = await xyRequest.request({
    url: homedata,
    interceptors: {
      responseInterceptor: (response) => {
        return response.data;
      },
    },
  });
  return res;
};
export { gethomedata };
