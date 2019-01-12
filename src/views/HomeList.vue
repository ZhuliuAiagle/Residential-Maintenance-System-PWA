<template>
      <div>
          <nothing v-if="house_count == 0"></nothing>
          <house-omit v-if="house_count"></house-omit>
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
import HouseOmit from '../components/HouseOmit.vue'
import Nothing from '../components/Nothing.vue'



export default {
  name: 'HomeList',
  components:{
    HouseOmit,
    Nothing
  },
  data: () => ({
    house_count : 0
  }),
  // 计算当前窗口的高度并进行设备适配
  methods:{
    currentWindowHeights: function(){
      return window.innerHeight.toString()
    }
  }
}
</script>

<style>

</style>
