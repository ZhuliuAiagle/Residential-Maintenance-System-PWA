<template>
    <div>
        <house-omit></house-omit>
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

export default {
  name: 'HomeList',
  components:{
    HouseOmit
  },
  data: () => ({
    menuVisible: false,
  }),
  // 计算当前窗口的高度并进行设备适配
  methods:{
    currentWindowHeights: function(){
      return window.innerHeight.toString()
    }
  }
}
</script>
