<template>
  <transition name="fade">
    <div>
          <br/>
          <br/>
          <md-card class = "md-primary weather-card md-elevation-10" md-with-hover>
            <md-card-header>
              <md-card-header-text>
                <div class="md-title">Washington DC</div>
                <div class="md-subhead">48 ~ 34°F</div>
              </md-card-header-text>
              <md-card-media md-medium>
                <img src="../assets/sun_transparent.png" alt="People">
              </md-card-media>
            </md-card-header>

            <md-card-actions>
              <!-- <md-button>Action</md-button>
              <md-button>Action</md-button> -->
            </md-card-actions>
          </md-card>
          <br/>
          <md-card class="md-primary ac-card md-elevation-13" @click.native="$router.push('/smart')">
            <md-card-header>
              <div class="md-title">Smart-Home Devices</div>
            </md-card-header>
            <md-card-content>
              <md-card-media>
                <div class="md-layout md-alignment-center">
                    <div class="md-layout-item ac-img">
                      <div>
                        <img src="../assets/aircon_active.png" style="width: 100px"/>
                      </div> 
                    </div>
                    <div class="md-layout-item" style = "text-align: center">
                      <p style="font-size:50px; font-weight:bold">79°</p>
                      <p>STATUS: Heating</p>
                    </div>
                </div>
              </md-card-media>
            </md-card-content>
          </md-card>
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
  .md-app-content .md-card{
  margin-left: 0px !important;
  margin-right: 0px !important;
  }
  .md-card.md-theme-default.md-primary.weather-card{
    background-image: url("../assets/Amin.jpg");
    background-repeat: no-repeat;
    background-size:100%;
  }
  .md-card.md-theme-default.md-primary.ac-card{
    background-image: url("../assets/Amin.jpg");
    background-repeat: no-repeat;
    background-size:200%;
  }
  .danger-title {
    margin-left: 50px;
    margin-top: 10px;
    display: flex;
    align-items: center;
  }
</style>

<script>
export default {
  name: 'Scroll',
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
