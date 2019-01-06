<template>
<div class="page-container">
	<md-app :md-scrollbar = "false" md-waterfall md-mode="fixed" v-bind:style="{'height':currentWindowHeights() + 'px', border: '1px 1px solid rgba(#000, .12)'}">
		<md-app-toolbar>
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <md-button class="md-icon-button" @click="$router.go(-1)">
              <md-icon>keyboard_arrow_left</md-icon>
            </md-button>
            <span class="md-title">Facilities</span>
          </div>
          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button"  v-if = "editState">
                <md-icon>add</md-icon>
            </md-button>
            <md-button class="md-icon-button" @click="editState = !editState">
                <md-icon v-if = "!editState">edit</md-icon>
                <md-icon v-if = "editState">done_all</md-icon>
            </md-button>
            <md-button class="md-icon-button">
              <md-icon>home</md-icon>
            </md-button>
          </div>
        </div>
        </md-app-toolbar>
		<md-app-content>
            <br/>
            <DeviceOmit :edit_state = "editState"></DeviceOmit>
		</md-app-content>
	</md-app>
</div>
</template>

<style lang="scss" scoped>
.ac-img{
    display: flex;
    align-items: center;
    margin-left: 17px;
  }
.md-app-content .md-card{
    margin-left: 0px !important;
    margin-right: 0px !important;
}

.md-card.md-theme-default.md-primary.orange-primary{
    background-color: orange;
}
.md-card.md-theme-default.md-primary.grey-primary{
    background-color: rgb(175, 174, 174);
}
.ac-img{
    display: flex;
    align-items: center;
    margin-left: 17px;
}
.order-dialog {
    width: 250px;
    height:380px;
}
.success-dialog{
    width: 250px;
    height:190px;
}
.warning-margin {
    margin: 20px
}
</style>

<script>
import DeviceOmit from '../components/DeviceOmit.vue'
export default {
  name: 'DeviceList',
  components : {
      DeviceOmit
  },
  data: () => ({
		menuVisible: false,
        houseName: "White House",
        editState: false
  }),
  // 计算当前窗口的高度并进行设备适配
  methods:{
    currentWindowHeights: function(){
      return window.innerHeight.toString()
    }
  }
}
</script>
