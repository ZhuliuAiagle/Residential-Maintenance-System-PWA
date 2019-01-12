<template>
        <div>
            <div style="height:10px"></div>
                <div @click="nextPage()">
                    <md-card class = "md-primary house-card md-elevation-6">
                        <md-card-header>
                            <md-card-header-text>
                            <div class="md-title">{{house_name}}</div>
                            <div class="md-subhead">{{house_address}}</div>
                            </md-card-header-text>
                            <md-card-media>
                            <img src="../assets/house.png" alt="Avatar">
                            </md-card-media>
                        </md-card-header>
                    </md-card>
                </div>
        </div>
</template>


<script>
export default {
    name: "HouseOmit",
    props:{
        house_id: String,
        house_name: String,
        house_address:String,
        house_owner:String,
        house_renter: String,
        role: String
    },
    data: () => ({
        
    }),
    methods:{
        nextPage : function(){
            this.$root.$house_id = this.house_id
            this.$root.$house_name = this.house_name
            this.$root.$house_address = this.house_address
            this.$root.$house_owner = this.house_owner
            this.$root.$house_renter = this.house_renter
            this.$root.$role = this.role
            this.$router.push({
                name: "HomeDetail"
            })
        }
    }
}
</script>

<style>
img{
    width: 140%;    
}
.md-card.md-primary.house-card.md-theme-default{
    background-image:url("../assets/Amin.jpg");
    background-size: 100%;
}
</style>
