import {
    HOME_CASUAL,
    HOME_NAV,
    HOME_SHOP_LIST,
    RECOMMEND_SHOP_LIST,
    SEARCH_GOODS,
    USER_INFO,
    RESET_USER_INFO,
    CART_GOODS_LIST
} from './mutation-types';

export default {
    [HOME_CASUAL](state,{homecasual}){
        state.homecasual=homecasual;
    },

    [HOME_NAV](state,{homenav}){
        state.homenav=homenav;
    },
    [HOME_SHOP_LIST](state,{homeshoplist}){
        state.homeshoplist=homeshoplist;
    },
    
}