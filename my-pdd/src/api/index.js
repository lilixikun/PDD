import ajax from "./ajax";

//获取首页的轮播图
export const getHomeCasual = () => ajax.get("/api/homecasual");

//获取首页导航
export const homenav = () => ajax.get("/api/homenav");

//获取首页商品列表
export const hoemShopList = () => ajax.get("/api/homeShopList");

//获取用户信息
export const getUserInfo = () => ajax.get("/api/getUserInfo");

//获取验证码
export const getPhoneCode = (phone) => ajax.get("/api/getPhoneCode?phone=" + phone);

//验证码登陆
export const codeLogin = (data) => ajax.post("/api/codeLogin", data);

//账户密码登陆
export const loginPwd = (data) => ajax.post("/api/loginPwd", data);