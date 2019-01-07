<template>
    <div>
        <order-omit v-for="(item, index) in orderList" :device_name = "item"  :key = "index"></order-omit>
    </div>
</template>

<style lang="scss" scoped>
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
  .ac-img{
    display: flex;
    align-items: center;
    margin-left: 17px;
  }
</style>

<script>
import OrderOmit from '../components/OrderOmit.vue'
export default {
  name: 'OrderList',
  components : {
    OrderOmit
  },
  data: () => ({
    menuVisible: false,
    orderList:[
      "fuck",
      "shit",
      "holyshit",
      "jinboshabi"
    ]
  }),
  // 计算当前窗口的高度并进行设备适配
  methods:{
    currentWindowHeights: function(){
      return window.innerHeight.toString()
    }
  }
}
</script>
