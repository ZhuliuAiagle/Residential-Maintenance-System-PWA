<template>
    <transition name="fade">
      <div>
          <nothing v-if="house_count == 0"></nothing>
          <house-omit v-for="(item,index) in house_list" :house_nick = "item" :key = "index"></house-omit>
      </div>
    </transition>
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
import HouseOmit from '../components/HouseOmit.vue'
import Nothing from '../components/Nothing.vue'

export default {
  name: 'HouseList',
  components:{
    HouseOmit,
    Nothing
  },
  data: () => ({
    menuVisible: false,
    house_count: 1,
    house_list:[
      "shit",
      "funck",
      "bub",
      "nimabi"
    ]
  }),
  created: function(){
    
  },
  // 计算当前窗口的高度并进行设备适配
  methods:{
    currentWindowHeights: function(){
      return window.innerHeight.toString()
    }
  }
}
</script>


<style>
.fade-enter-active .fade-leave-active{
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
