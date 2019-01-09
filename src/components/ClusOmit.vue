<template>
    <div>
        <md-list-item>
            <div class="md-list-item-text">
            <span>Unclassified</span>
            </div>
            <md-button class="md-icon-button md-list-action">
            <md-icon>keyboard_arrow_right</md-icon>
            </md-button>
        </md-list-item>
    </div>
</template>



<script>
export default {
    name: "ClusOmit",
    props:{
        isUnClassified: String,
        name: String
    },
    data: ()=>({

    }),
    
}
</script>
