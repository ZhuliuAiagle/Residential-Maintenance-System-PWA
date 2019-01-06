<template>
    <div>
        <br/>
          <md-card>
              <md-card-header>
                  <md-card-header-text>
                  <div class="md-title">Zhongnanhai</div>
                  <div class="md-subhead">Chang'an Avenue, Beijing</div>
                  </md-card-header-text>
                  <md-card-media>
                  <img src="../assets/wst.jpg" alt="Avatar">
                  </md-card-media>
              </md-card-header>
          </md-card>
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
export default {
  name: 'HouseList',
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
