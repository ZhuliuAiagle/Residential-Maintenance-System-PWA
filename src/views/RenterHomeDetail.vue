<template>
<div class="page-container">
		<HouseInfo></HouseInfo>
</div>
</template>

<style lang="scss" scoped>
	.md-app-content .md-card{
		margin-left: 0px !important;
		margin-right: 0px !important;
	}
</style>

<script>
import HouseInfo from '../components/HouseInfo.vue'
export default {
	name: 'RenterHome',
	components:{
		HouseInfo
	},
  data: () => ({
		menuVisible: false,
		houseName: "White House"
  }),
  // 计算当前窗口的高度并进行设备适配
  methods:{
    currentWindowHeights: function(){
      return window.innerHeight.toString()
    }
  }
}
</script>
