<template>
    <div>
        <br/>
        <md-card class="ac-card">
            <md-card-header>
                <md-card-header-text>
                    <div class="md-title">{{device_name}}</div>
                    <div class="md-subhead">{{$root.$cluster_name}}</div>
                    <div class="md-subhead">Expire Time: {{repair_schedule}}</div>
                    <div class="md-subhead">Life: {{life}}</div>
                    <div class="md-subhead">Status: {{status}}</div>
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
                <p>Facility name: {{device_name}}</p>
                <p>Room: {{$root.$cluster_name}}</p>
                <p>House: {{$root.$house_name}}</p>
                <p>Price: $10</p>
            </md-content>
            <md-dialog-actions>
                <md-button class="md-primary" @click="confirm_order = false">Cancel</md-button>
                <md-button class="md-accent" @click="submit_order()">SUBMIT</md-button>
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
import axios from 'axios'
export default {
    name : "DeviceOmit",
    props:{
        edit_state: Boolean,
        device_id:String,
        device_name: String,
        device_date: String,
        device_status: String,
        repair_schedule: String
    },
    data: () => ({
        confirm_order: false,
        pay_success: false,
        pay_result:"",
        remove_alert: false,
        
    }),
    created: function(){
        this.$root.$device_name = this.device_name
    },
    computed: {
        life: function(){
            var dt = new Date()
            var expire = new Date(this.repair_schedule)
            var duration = (expire - dt) / (1000 * 60 * 60 * 24)
            return Math.ceil(duration)
        },
        status: function(){
            if(this.life > 50) return "great"
            else if(this.life > 20) return "good"
            else if(this.life > 7) return "warning"
            else return "dangerous"
        }
    },
    methods: {
        submit_order: function(){
            var that = this
            var usr = localStorage.getItem("username")
            var dt = new Date()
            var order_time = dt.getFullYear() + '-' + (dt.getMonth()+1) + '-' + dt.getDate()
            var repair_time = dt.getFullYear() + '-' + (dt.getMonth()+1) + '-' + dt.getDate()
            this.confirm_order = false;
            console.log(usr, order_time, repair_time, this.$root.$house_id,that.device_id)
            axios({
                method: 'post',
                url: this.$url,
                headers:{
                    "Content-type": "application/x-www-form-urlencoded"
                },
                data:{
                    "Function":"CreateOrder",
                    "User_ID": usr,
                    "User_Type": "Landlord",
                    "Room_ID": that.$root.$cluster_id,
                    "House_ID":  that.$root.$house_id,
                    "Facility_ID": that.device_id,
                    "Order_Time":  order_time,
                    "Repairer_Time" : repair_time,
                    "Information": "default_information"
                }
                }).then(function(response){
                    console.log(response.data)
                    that.pay_result = "Operate Successfully!"
                    that.pay_success = true
                }).catch(function(error){
                    console.log(error)
                    that.pay_result = error.data
                    that.pay_success = true
                    
            })
        },
        remove_myself: function() {
            /*和api的接口*/
            location.reload()
        },
        callForRepair: function(){

        }
    }
}
</script>

<style>
.order-dialog {
    width: 250px;
    height:360px;
}
.success-dialog{
    width: 250px;
    height:180px;
}
.warning-margin {
    margin: 20px
}
</style>
