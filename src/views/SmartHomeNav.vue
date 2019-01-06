<template>
<div class="page-container">
	<md-app :md-scrollbar = "false" md-waterfall md-mode="fixed" v-bind:style="{'height':currentWindowHeights() + 'px', border: '1px 1px solid rgba(#000, .12)'}">
		<md-app-toolbar>
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <md-button class="md-icon-button" @click="$router.go(-1)">
              <md-icon>keyboard_arrow_left</md-icon>
            </md-button>
            <span class="md-title">Smart Home</span>
          </div>
          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button" @click="$router.go('/')">
              <md-icon>home</md-icon>
            </md-button>
          </div>
        </div>
        </md-app-toolbar>
		<md-app-content>
        <md-card class="md-primary grey-primary">
                <md-card-header>
                    <div class="md-title">Air-Conditioner-1</div>
                </md-card-header>
                <md-card-content>
                    <md-card-media>
                    <div class="md-layout" :class="md-alignment-center">
                        <div class="md-layout-item ac-img">
                            <div>
                            <img src="../assets/aircon.png" style="width: 100px"/>
                            </div> 
                        </div>
                        <div class="md-layout-item" style = "text-align: center">
                            <p style="font-size:50px; font-weight:bold">--</p>
                            <p>STATUS: OFF</p>
                        </div>
                    </div>
                    </md-card-media>
                </md-card-content>
        </md-card>
        <br/>
        <md-card class = "md-primary orange-primary"  md-with-hover>
                <md-card-header>
                    <div class="md-title">Air-Conditioner-2</div>
                </md-card-header>
                <md-card-content>
                    <md-card-media>
                    <div class="md-layout" :class="md-alignment-center">
                        <div class="md-layout-item ac-img">
                            <div>
                            <img src="../assets/aircon_active.png" style="width: 100px"/>
                            </div> 
                        </div>
                        <div class="md-layout-item" style = "text-align: center">
                            <p style="font-size:50px; font-weight:bold">82°F</p>
                            <p>STATUS: Heating</p>
                        </div>
                    </div>
                    </md-card-media>
                </md-card-content>
        </md-card>
        <br/>
        <md-card class = "md-primary"  md-with-hover>
                <md-card-header>
                    <div class="md-title">Air-Conditioner-3</div>
                </md-card-header>
                <md-card-content>
                    <md-card-media>
                    <div class="md-layout" :class="md-alignment-center">
                        <div class="md-layout-item ac-img">
                            <div>
                            <img src="../assets/aircon_active.png" style="width: 100px"/>
                            </div> 
                        </div>
                        <div class="md-layout-item" style = "text-align: center">
                            <p style="font-size:50px; font-weight:bold">76°F</p>
                            <p>STATUS: Colding</p>
                        </div>
                    </div>
                    </md-card-media>
                </md-card-content>
        </md-card>
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
    text-align: center;
}
.md-card.md-theme-default.md-primary.orange-primary{
    background-color: orange;
}
.md-card.md-theme-default.md-primary.grey-primary{
    background-color: rgb(175, 174, 174);
}
</style>

<script>
export default {
  name: 'SmartHome',
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
