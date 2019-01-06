<template>
    <div>
        <router-link to = "/home-detail">
        <br/>
          <md-card>
              <md-card-header>
                <md-card-header-text>
                <div class="md-title">White House</div>
                <div class="md-subhead">1600 Pennsylvania Ave NW, Washington, DC 20500</div>
                </md-card-header-text>
                <md-card-media>
                <img src="../assets/wst.jpg" alt="Avatar">
                </md-card-media>
              </md-card-header>
          </md-card>
        </router-link>
    </div>
</template>


<script>
export default {
    name: "HouseOmit",
    data: () => ({
        house_id:"default",
        house_name:"default",
        house_info:"default"
    })
}
</script>
