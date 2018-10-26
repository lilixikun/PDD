import ajax from "./ajax";

//获取首页的轮播图
export const getHomeCasual = () => ajax.get("/api/homecasual");

//获取首页导航
export const homenav = () => ajax.get("/api/homenav");

//获取首页商品列表
export const hoemShopList = () => ajax.get("./api/homeShopList");