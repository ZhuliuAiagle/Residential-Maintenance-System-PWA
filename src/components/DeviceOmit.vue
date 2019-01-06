<template>
    <div>
        <md-card class="ac-card">
            <md-card-header>
                <md-card-header-text>
                    <div class="md-title">{{device_title}}</div>
                    <div class="md-subhead">{{device_belong_room}}</div>
                    <div class="md-subhead">Status: {{device_status}}</div>
                </md-card-header-text>
                <md-card-media md-medium>
                <img src="../assets/wardrobe.png" alt="People">
                </md-card-media>
            </md-card-header>
            <md-card-actions>
                <md-button @click="confirm_order = true">Repair</md-button>
                <md-button v-if = "edit_state" class = "md-accent md-raised" @click = "remove_alert = true">REMOVE</md-button>
            </md-card-actions>
        </md-card>
        <md-dialog :md-active.sync = "confirm_order" class = "order-dialog">
            <md-dialog-title>Confirm Order</md-dialog-title>
            <md-content class = "warning-margin">
                <p>Facility ID: {{device_id}}</p>
                <p>Facility name: {{device_title}}</p>
                <p>Room: {{device_belong_room}}</p>
                <p>House: {{device_house}}</p>
                <p>Submiter: Jackie CHAN</p>
                <p>Price: $10</p>
            </md-content>
            <md-dialog-actions>
                <md-button class="md-primary" @click="confirm_order = false">Cancel</md-button>
                <md-button class="md-accent" @click="submit_order(); confirm_order = false;pay_success = true">SUBMIT</md-button>
            </md-dialog-actions>
        </md-dialog>
        <md-dialog :md-active.sync = "pay_success" class = "success-dialog">
            <md-dialog-title>Confirm Order</md-dialog-title>
            <md-content class = "warning-margin">
                {{pay_result}}
            </md-content>
            <md-dialog-actions>
                <md-button class="md-accent" @click="pay_success = false">OK</md-button>
            </md-dialog-actions>
        </md-dialog>
        <md-dialog :md-active.sync = "remove_alert" class = "remove-alert-click">
            <md-dialog-title>WARNING!</md-dialog-title>
            <md-content class = "warning-margin">
                Are you sure to remove this facility?
            </md-content>
            <md-dialog-actions>
                <md-button class="md-primary" @click="confirm_order = false">Cancel</md-button>
                <md-button class="md-accent" @click="remove_myself(); remove_alert = false;">SUBMIT</md-button>
            </md-dialog-actions>
        </md-dialog>                
    </div>  
</template>

<script>
export default {
    name : "DeviceOmit",
    props:{
        edit_state: Boolean
    },
    data: () => ({
        device_id: "x0000x00",
        device_title: "default_device",
        device_belong_room: "default_room",
        device_house: "default_house",
        device_status: "normal",
        confirm_order: false,
        pay_success: false,
        pay_result:"",
        remove_alert: false
    }),
    computed: {

    },
    methods: {
        submit_order: function(){
            /*和api的接口*/
        },
        remove_myself: function() {
            /*和api的接口*/
            location.reload()
        }
    }
}
</script>

<style>
.order-dialog {
    width: 250px;
    height:380px;
}
.success-dialog{
    width: 250px;
    height:190px;
}
.warning-margin {
    margin: 20px
}
</style>
