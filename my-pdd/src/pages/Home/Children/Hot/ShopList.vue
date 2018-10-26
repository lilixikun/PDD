<template>
 <div class="showList">
     <div v-for="(item,index) in homeshoplist" :key="index" v-if="homeshoplist.length>0" class="shop-itme">
         <img :src="item.hd_thumb_url" />
         <div class="shop-item-right">
            <div>{{item.goods_name}}</div>
            <div class="shop-item-bottom">
              <span style="fontSize:12px;color:#666"><span class="item-price">￥{{item.normal_price / 100}}</span>{{item.sales_tip}}</span>
            </div>
         </div>
     </div>
</div>   
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "shopList",
  data() {
    return {
      shopList: []
    };
  },
  computed: {
    ...mapState(["homeshoplist"])
  }
};
</script>
<style lang="stylus">
.showList {
    width: 100%;
    background-color: #f5f5f5;

    .shop-itme {
        width: 100%;
        background: #ffffff;
        margin-bottom: 5px;
        display: flex;
        flex-direction: row;
        flex: 1;

        img {
            padding: 10px;
            width: 40%;
            height: 40%;
        }

        .shop-item-right {
            padding: 10px;
            height: 170px;
            font-size: 14px;
            display: flex;
            flex-direction: column;
            align-items: baseline;

            .shop-item-bottom {
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;

                // position: relative;
                // left: 0px;
                // bottom: 0px;
                // align-items: center;
                .item-price {
                    font-size: 18px;
                    text-align: center;
                    font-weight: bolder;
                    color: red;
                }
            }
        }
    }
}
</style>


