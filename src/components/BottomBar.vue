<template>
  <div>
    <div class="fix-end">
      <md-bottom-bar md-sync-route>
        <md-bottom-bar-item md-label="Home" md-icon="home"></md-bottom-bar-item>
        <md-bottom-bar-item md-label="Posts" md-icon="/assets/icon-whatshot.svg"></md-bottom-bar-item>
        <md-bottom-bar-item md-label="Favorites" md-icon="favorite"></md-bottom-bar-item>
      </md-bottom-bar>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BarRouter'
  }
</script>

<style lang="scss" scoped>
.fix-end{
    position: fixed;
    bottom: 0px;
    right:0px;
    left:0px;
    z-index:999;
    background-color: purple;
}
</style>