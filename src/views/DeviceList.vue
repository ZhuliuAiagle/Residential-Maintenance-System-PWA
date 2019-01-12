<template>
<div class="page-container">
		<md-toolbar style = "position: fixed">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <md-button class="md-icon-button" @click="$router.go(-1)">
              <md-icon>keyboard_arrow_left</md-icon>
            </md-button>
            <span class="md-title">Facilities</span>
          </div>
          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button"  v-if = "editState" @click=" addState = true ">
                <md-icon>add</md-icon>
            </md-button>
            <md-button class="md-icon-button" @click="editState = !editState">
                <md-icon v-if = "!editState">edit</md-icon>
                <md-icon v-if = "editState">done_all</md-icon>
            </md-button>
            <md-button class="md-icon-button" @click="$router.push('/')">
              <md-icon>home</md-icon>
            </md-button>
          </div>
        </div>
        </md-toolbar>
        <div style="height: 30px"></div>
		<md-content>
            <br/>
            <DeviceOmit v-for="(item,index) in device_list" :edit_state = "editState" :key="index" :device_name="item['Facility_Name']" :device_id="item['Facility_ID']" :device_status="item['Status']" :repair_schedule="item['Repair_Schedule']"></DeviceOmit>
		</md-content>
        <md-dialog :md-active.sync="addState" class="new-facility-dialog">
            <md-dialog-title>New Facility</md-dialog-title>
            <md-content style="margin:20px">
                <md-field>
                    <label>Name</label>
                    <md-input v-model="new_facility_name"></md-input>
                </md-field>
                <md-field>
                    <label>Remarks</label>
                    <md-input v-model="new_facility_info"></md-input>
                </md-field>
                <md-datepicker v-model="new_facility_expire_time">
                    <label>Next Expire Time</label>
                </md-datepicker>
            </md-content>
            <md-dialog-actions>
                <md-button class="md-primary" @click="addState = false;">CANCEL</md-button>
                <md-button class="md-primary" @click="addState = false; addFacility()">ADD</md-button>
            </md-dialog-actions>
        </md-dialog>
        <md-dialog-confirm
            :md-active.sync="finishState"
            :md-content="return_message"
            md-confirm-text="OK" @md-confirm="finishState = false; editState = false; renewDeviceList();"/>
</div>
</template>



<script>
import DeviceOmit from '../components/DeviceOmit.vue'
import axios from 'axios'
export default {
  name: 'DeviceList',
  components : {
      DeviceOmit
  },
  data: () => ({
		menuVisible: false,
        houseName: "White House",
        editState: false,
        addState: false,
        finishState: false,
        device_list: [],
        device_count: 0,
        new_facility_name: "",
        new_facility_info: "",
        new_facility_expire_time: new Date(),
        return_message: ""
  }),
  computed:{
      expire_time: function(){
          return this.new_facility_expire_time.getFullYear() + '-' + (this.new_facility_expire_time.getMonth() + 1) + '-' + this.new_facility_expire_time.getDate() 
      },
      new_facility_status: function(){
        var that_day = this.new_facility_expire_time
        var today = new Date()
        var duration = (that_day - today) / (1000 * 60 * 60 * 24)
        if(duration > 30) return "great"
        else if(duration > 20) return "good"
        else if(duration > 10) return "general"
        else if(duration > 3) return "warning"
        else return "dangerous"
      }
  },
  // 计算当前窗口的高度并进行设备适配
  created: function(){
        var that = this
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
                    that.nothing = false
                    that.device_list = that.device_list.concat(res["Facility[]"])
                    that.device_count += res["Facility[]"].length
                }else{
                    that.nothing = true
                    throw res["Status"] + res["Message"]
                }
            }).catch(function(error){
                console.log(error)
        })
  },
  methods:{
    addFacility: function(){
        this.addState = false 
        var that = this
        axios({
            method: 'post',
            url: this.$url,
            headers:{
                "Content-type": "application/x-www-form-urlencoded"
            },
            data:{
                "Function":"add_host_facility",
                "Room_ID": that.$root.$cluster_id,
                "Facility_Name": that.new_facility_name,
                "Information":  that.new_facility_info,
                "Status": that.new_facility_status,
                "Owner_ID": localStorage.getItem('username'),
                "Repair_Schedule": that.expire_time
            }
            }).then(function(response){
                var res = response.data;
                if(res["Status"] == 200){
                    that.return_message = "Operate Successfully!"
                    that.finishState = true
                }else{
                   that.return_message = "400: Operation Denied by Server: No Permission"
                   that.finishState = true
                }
            }).catch(function(error){
                console.log(error)
                that.return_message = "500: Operation Denied by Server: Interal Error"
                that.finishState = true
        })
    },
    renewDeviceList: function(){
        this.device_list = []
        this.device_count = 0
        var that = this
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
                    that.device_list = that.device_list.concat(res["Facility[]"])
                    that.device_count += res["Facility[]"].length
                }else{
                    throw res["Status"] + res["Message"]
                }
            }).catch(function(error){
                console.log(error)
        })
    }
  }
}
</script>


<style lang="scss" scoped>
.ac-img{
    display: flex;
    align-items: center;
    margin-left: 17px;
  }
.md-app-content .md-card{
    margin-left: 0px !important;
    margin-right: 0px !important;
}

.md-card.md-theme-default.md-primary.orange-primary{
    background-color: orange;
}
.md-card.md-theme-default.md-primary.grey-primary{
    background-color: rgb(175, 174, 174);
}
.ac-img{
    display: flex;
    align-items: center;
    margin-left: 17px;
}
.order-dialog {
    width: 250px;
    height:240px;
}
.success-dialog{
    width: 250px;
    height:190px;
}
.warning-margin {
    margin: 20px
}
.md-dialog{
    max-height: 400px;
    max-width: 400px;
}
.new-facility-dialog{
    height: 450px;
    width: 300px;
}
</style>