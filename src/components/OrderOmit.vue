<template>
    <div>
        <br/>
        <md-card class = "md-primary md-elevation-10 repair-card">
            <md-card-header>
            <md-card-header-text>
                <div class="md-title">Order {{order_id}}</div>
                <div class="md-subhead">House: {{house_id}}</div>
                <div class="md-subhead">Device: {{facility_id}}</div>
                <div class="md-subhead">status: {{status}}</div>
            </md-card-header-text>
            <md-card-media md-medium>
                <img src="../assets/Repair.png" alt="People">
            </md-card-media>
            </md-card-header>
            <!-- <md-card-actions>
                <md-button v-if="isFinish" class="md-raised md-accent" @click="rateState = true">rate</md-button>
            </md-card-actions> -->
        </md-card>
    </div>
</template>


<script>
import axios from 'axios'
export default {
    name: "OrderOmit",
    props:{
        order_id: String,
        house_id: String,
        facility_id: String,
        status: String
    },
    data: () => ({
       house_name: "",
       facility_name : "",
       rateState: false
    }),
    created: function(){
       
    },
    methods:{
        
    },
    computed:{
        isFinish: function(){
            return this.status == "Completed" ? true : false
        }
    }
}
</script>

<style>
/* .md-button.md-raised.md-primary.md-theme-default{
    background-image:url("../assets/Amin.jpg");
    background-size: 100%;
} */
img{
    width: 70%;    
}
.md-card.md-primary.repair-card.md-theme-default{
    background-image:url("../assets/Amin.jpg");
    background-size: 100%;
}
</style>