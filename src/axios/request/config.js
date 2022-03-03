// 配置默认的baseURL和超时时间
let baseURL = "";
let Timeout = 10000;
if (process.env.NODE_ENV === "development") {
  // baseURL = "http://39.98.123.211";
} else if (process.env.NODE_ENV === "production") {
  // baseURL = "http://39.98.123.211";
}
export { baseURL, Timeout };
