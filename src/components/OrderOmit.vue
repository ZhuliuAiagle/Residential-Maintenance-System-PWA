<template>
    <div>
        <br/>
        <md-card class = "md-primary md-elevation-10 repair-card">
            <md-card-header>
            <md-card-header-text>
                <div class="md-title">{{device_name}}</div>
                <div class="md-subhead">ID: 45646</div>
                <div class="md-subhead">House: White House</div>
                <div class="md-subhead">Room: Kids' Bedroom</div>
                <div class="md-subhead">status: Repairing</div>
            </md-card-header-text>
            <md-card-media md-medium>
                <img src="../assets/Repair.png" alt="People">
            </md-card-media>
            </md-card-header>
            <md-card-actions>
                <md-button v-if="isFinished" class="">rate</md-button>
            </md-card-actions>
        </md-card>
    </div>
</template>


<script>
export default {
    name: "OrderOmit",
    props:{
        device_name: String
    },
    data: () => ({
        isFinished: false
    }),
    methods:{

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