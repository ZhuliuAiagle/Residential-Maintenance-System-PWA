<template>
    <div>
        <br/>
          <md-card>
              <md-card-header>
                <md-card-header-text>
                <div class="md-title">Air-Conditioner</div>
                <div class="md-subhead">ID: 45646</div>
                <div class="md-subhead">House: White House</div>
                <div class="md-subhead">Room: Kids' Bedroom</div>
                <div class="md-subhead">status: Repairing</div>
                </md-card-header-text>
                <md-card-media md-medium>
              <img src="../assets/repair.png" alt="People">
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
  name: 'OrderList',
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
