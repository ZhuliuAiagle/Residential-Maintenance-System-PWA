<template>
    <div class="error-page">
        <div style="height: 20px"></div>
        <md-empty-state
        md-icon="sentiment_very_dissatisfied"
        md-label="You may not be logged in"
        md-description="You can't enjoy the convenience HouseHub™ brings to you">
            <md-button @click="$router.push('/login')" class="md-primary md-raised">Sign In</md-button>
        </md-empty-state>
        <div style="height: 300px"></div>
    </div> 
</template>



<script>
export default {
    name: "NoLogin",
    data: () => ({

    }),
    props : {

    },
    methods: {

    }
}
</script>


<style>

</style>