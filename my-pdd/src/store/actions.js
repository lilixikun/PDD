import {
    getHomeCasual,
    homenav,
    hoemShopList
} from "../api/index";

import {
    HOME_CASUAL,
    HOME_NAV,
    HOME_SHOP_LIST,
    RECOMMEND_SHOP_LIST,
    SEARCH_GOODS,
    USER_INFO,
    RESET_USER_INFO,
    CART_GOODS_LIST
} from "./mutation-types";

export default {
    async getHomeCasual({commit }) {
        const res = await getHomeCasual();
        commit(HOME_CASUAL,{homecasual:res.message});
    },

    async getHomenav({commit}){
        const res=await homenav();
        commit(HOME_NAV,{homenav:res.message});
    },

    async getShopList({commit}){
        const res=await hoemShopList();
        commit(HOME_SHOP_LIST,{homeshoplist:res.message.goods_list});
    }
}