<template>
        <div>
            <router-link to = "/home-detail">
            <br/>
            <md-card class = "md-primary house-card md-elevation-6">
                <md-card-header>
                    <md-card-header-text>
                    <div class="md-title">{{house_nick}}</div>
                    <div class="md-subhead">1600 Pennsylvania Ave NW, Washington, DC 20500</div>
                    </md-card-header-text>
                    <md-card-media>
                    <img src="../assets/house.png" alt="Avatar">
                    </md-card-media>
                </md-card-header>
            </md-card>
            </router-link>
        </div>
</template>


<script>
export default {
    name: "HouseOmit",
    props:{
        house_nick: String
    },
    data: () => ({
        house_id:"default",
        house_name:"default",
        house_info:"default"
    })
}
</script>

<style>
img{
    width: 70%;    
}
.md-card.md-primary.house-card.md-theme-default{
    background-image:url("../assets/Amin.jpg");
    background-size: 100%;
}
</style>
