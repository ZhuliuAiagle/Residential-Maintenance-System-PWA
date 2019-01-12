<template>
    <div>
        <md-list-item>
            <div class="md-list-item-text">
            <span>{{name}}</span>
            </div>
            <md-button class="md-icon-button md-list-action" @click="nextDevice()">
            <md-icon>keyboard_arrow_right</md-icon>
            </md-button>
            <md-button class="md-icon-button md-list-action md-accent" v-if="edit_state" @click="deleteDialog=true">
            <md-icon>delete</md-icon>
            </md-button>
        </md-list-item>
        <md-dialog :md-active.sync = "deleteDialog">
            <md-dialog-title>Warning!</md-dialog-title>
            <md-content class = "warning-margin">Are you sure to delete this cluster?</md-content>
            <md-dialog-actions>
                <md-button class="md-primary" @click="deleteDialog = false">Cancel</md-button>
                <md-button class="md-accent" @click="removeMyself()">Delete</md-button>
            </md-dialog-actions>
        </md-dialog>
        <md-dialog-confirm
            :md-active.sync="return_success"
            md-title="Delete Room"
            :md-content = "return_message"
            md-confirm-text="Done" @md-confirm="return_success = false; $emit('renewClusterList')"/>
    </div>
</template>



<script>
import axios from 'axios'
export default {
    name: "ClusOmit",
    props:{
        name: String,
        room_id: String,
        edit_state: Boolean
    },
    data: ()=>({
        deleteDialog: false,
        return_success: false,
        return_message: ""
    }),
    created:function(){
        
    },
    methods: {
        nextDevice: function(){
            this.$root.$cluster_id = this.room_id
            this.$root.$cluster_name = this.name
            this.$router.push({
                name: "Devices"
            })
        },
        removeMyself: function(){
            this.deleteDialog = false
            var that = this
            // 首先查询有多少设备
            var that = this
            var number = 0
            axios({
                method: 'post',
                url: this.$url,
                headers:{
                    "Content-type": "application/x-www-form-urlencoded"
                },
                data:{
                    "Function":"get_room_facility",
                    "Room_ID": that.$root.$cluster_id
                }
                }).then(function(response){
                    var res = response.data;
                    if(res["Status"] == 200){
                        number = res["Facility[]"].length
                    }else{
                        number = -1
                    }
                }).catch(function(error){
                    console.log(error)
                    number = -1
            })
            if(number == -1){
                that.return_success = true
                that.return_message = "400: Operation Denied by Server: No Permission"
                return;
            }else if(number > 0){
                that.return_success = true
                that.return_message = "400: Operation Denied by Server: You can only delete EMPTY room(s)"
                return;
            }
            else if(number == 0){
                axios({
                    method: 'post',
                    url: this.$url,
                    headers:{
                        "Content-type": "application/x-www-form-urlencoded"
                    },
                    data:{
                        "Function":"delete_host_room",
                        "Room_ID":that.room_id
                    }
                    }).then(function(response){
                        console.log(response.data)
                        var res = response.data
                        if(res["Status"] == 200){
                            that.return_success = true
                            that.return_message = "Operate Successfully!"
                        }
                        else{
                            that.return_message = "400: Operation Denied by Server: No Permission"
                        }
                    }).catch(function(error){
                        console.log(error)
                        that.return_message = "500: Operation Denied by Server: Internal Error"
                })
            }
        }
    }
    
}
</script>

<style>
.md-dialog {
    width: 250px;
    height:190px;
}

</style>
